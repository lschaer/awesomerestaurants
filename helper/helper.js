// rock-solid data structures

// this is built without using objects, without local variables, all purely immutable

export { Pair, fst, snd, Tuple, Choice }


// ----------- Data structures

const Pair =
    first  =>
        second =>
            Object.seal( selector  => selector (first) (second) ); // seal to disallow using functions as objects

const fst = arg_1 => arg_2 => arg_1;
const snd = arg_1 => arg_2 => arg_2;

const Tuple = n => {
    if (n < 1) throw new Error("Tuple must have first argument n > 0");

    return [
        TupleCtor (n) ([]), // ctor curries all values and then waits for the selector
        // every selector is a function that picks the value from the curried ctor at the same position
        ...Array.from( {length:n}, (it, idx) => values => values[idx] )
    ];
};

const nApply = n => f => n === 0 ? f : ( g => nApply (n-1) (f (g) ));  // a curried functions that eats so many arguments

const Choice = n => { // number of ctors
    if (n < 1) throw new Error("Choice must have first argument n > 0");

    return [
        ...Array.from( {length:n}, (it, idx) => ChoiceCtor (idx + 1) (n + 1) ([]) ), // first arg is the ctor state
        choice => nApply (n) (choice)                                                // takes n + 1 args and returns arg[0] (arg[1]) (arg[2]) ... (arg[n])

    ];
};

// private implementation details ---------------------

const TupleCtor = n => values => {
    if (n === 0 ) {                                             // we have curried all ctor args, now
        return Object.seal(selector => selector(values))        // return a function that waits for the selector
    }
    return value => {                                           // there are still values to be curried
        return TupleCtor (n - 1) ([...values, value])           // return the ctor for the remaining args
    }
};

const ChoiceCtor = position => n => choices => {
    if (n === 0 ) {                                                  // we have curried all ctor args, now
        return Object.seal(choices[position] (choices[0]) )          // we call the chosen function with the ctor argument
    }
    return choice => {                                                // there are still choices to be curried
        return ChoiceCtor (position) (n - 1) ([...choices, choice])   // return the ctor for the remaining args
    }
};

// church encoding of the lambda calculus in JavaScript
export {
    id, beta, konst, flip, kite, cmp, cmp2,
    T, F, and, not, beq, or, xor, imp, rec,
    n0, n1, n2, n3, n4, n5,
    succ, plus, mult, pow, isZero, church,
    pair, either, Left, Right,
    Nothing, Just, maybe, bindMaybe,
    curry, uncurry
}

// function id(x) { return x; }, \x.x
const id = x => x;

// function application, beta reduction
// const beta = f => id(f);
// const beta = f => f;
// beta.toString = () => "beta";
const beta = f => x => f(x);

// M, const, first, id2, true
const konst = x => y => x;

const flip = f => x => y => f(y)(x);

// const flip = f => g => x => f(x)(g);  // f(x)(g(x)) // konst(g)(x) -> g
// const flip = f => g      => s(f)(konst(g));         // C = \fg.S(f)(Kg)
// const flip = f => g => x => s(f)(konst(g))(x);      // def of S
// const flip = f => g => x => f(x)(konst(g)(x));
// const flip = f => g => x => f(x)(g); // qed.

// Kite
// kite = x => y => y;
// kite = x => y => konst(id)(x)(y);
// const kite = konst(id);
// const kite = x => y => flip(konst)(x)(y);
const kite = flip(konst);

// -----

// Bluebird, composition
const cmp = f => g => x => f(g(x));
// const cmp = f => g      => S(konst(f))(g);
// const cmp = f => g => x => S(konst(f))(g)(x);
// const cmp = f => g => x => (konst(f)(x))(g(x));
// const cmp = f => g => x => (f)(g(x));
// const cmp = f => g => x => f(g(x)); // qed.

//const cmp2 = f => g => x => y => f(g(x)(y));
const cmp2 = cmp (cmp)(cmp);

// ---- boolean logic

const T   = konst;
const not = flip;
const F   = not(T);             //const F = kite;

const and = x => y => x(y)(x);
// const and = f => g => f(g)(f);
// const and = f => g => S(f)(konst(f))(g)  // \fg.Sf(Kf)g

// const or  = x => y => x(x)(y);
const or  = x =>  x(x);
// const or  = M;

const beq = x => y => x(y)(not(y));
//const beq = x => y => S(x)(not)(y);
//const beq = x => S(x)(not);   // S(x)(K)

//const xor = cmp (cmp(not)) (beq)   ;
const xor =  cmp2 (not) (beq)   ;

//const imp = x => y => x (y) (T);
//const imp = x => y => x (y) ( not(x));
// const imp = x => y => flip(x) (not(x)) (y) ;
const imp = x => flip(x) (not(x)) ;
// const imp = S(not)(not) ;
//const imp = S(C)(C) ;


// ----

// loop = loop
// loop = (\x. x x) (\x. x x)
// loop = ( x => x(x) ) ( x => x(x) )
// this is self-application applied to self-application, i.e. M(M)
// which we already checked to be endlessly recursive

// rec = f => f (rec (f)) // cannot work, since rec(f) appears in argument position

// define loop in terms of rec:
// const rec = f => f (rec (f));  // y
// const rec = f => M ( x => f(M(x)) )     // s/o

// this works:
// rec :: (a -> a) -> a
const rec  = f => f ( n => rec(f)(n)  ) ;

// ---------- Numbers

const n0 = f => x => x;         // same as konst, F
const n1 = f => x => f(x);      // same as beta, once, lazy
const n2 = f => x => f(f(x));           // twice
const n3 = f => x => f(f(f(x)));        // thrice

//const succ = cn => ( f => x => f( cn(f)(x) ) );
//const succ = cn => ( f => x => f( (cn(f)) (x) ) );
//const succ = cn => ( f => x => cmp(f) (cn(f)) (x)  );
const succ = cn => ( f => cmp(f) (cn(f)) );
//const succ = cn => ( f => S(cmp)(cn)(f) );
//const succ = cn => S(B)(cn);

const n4 = succ(n3);
const n5 = succ(n4);

// addition + n is the nth successor

//const plus = cn1 => cn2 => f => x =>  cn2(succ)(cn1)(f)(x)  ; // eta
const plus = cn1 => cn2 =>  cn2(succ)(cn1)  ;

// multiplication is repeated plus
// const mult = cn1 => cn2 => cn2 (plus(cn1)) (n0) ;
// rolled out example 2 * 3
// const mult = cn1 => cn2 => f => x =>  f f f   f f f   x
// const mult = cn1 => cn2 => f => x =>  cn1 (cn2 (f))  (x); // eta
// const mult = cn1 => cn2 => f =>  cn1 (cn2 (f));  // introduce composition
// const mult = cn1 => cn2 => cmp(cn1)(cn2); // eta
// const mult = cn1 => cmp(cn1); // eta
const mult = cmp;
//const mult = B;

// power is repeated multiplication
// 2 ^ 3 = (2* (2* (2*(1))) ,
// const pow = cn1 => cn2 => cn2 (mult(cn1)) (n1);
// rolled out = f f ( f f ( f f x ))
// const pow = cn1 => cn2 => f => x => cn2 (cn1)(f)(x); // eta
const pow = cn1 => cn2 => cn2 (cn1) ;
// const pow = cn1 => cn2 => beta (cn2) (cn1) ;
// const pow = cn1 => cn2 => flip (beta) (cn1) (cn2) ;
// const pow = flip (beta) ;
// const pow = not(id);       // x^0 = 1

const isZero = cn =>  cn (konst(F)) (T);

const church = n => n === 0 ? n0 : succ(church(n-1)); // church numeral for n

// ----------- Data structures

// prototypical Product Type: pair
const pair = a => b => f => f(a)(b);

//const fst = p => p(T); // pick first  element from pair
//const snd = p => p(F); // pick second element from pair

// prototypical Sum Type: either

const Left   = x => f => g => f (x);
const Right  = x => f => g => g (x);
const either = e => f => g => e (f) (g);

// maybe as a sum type

// const Nothing  = ()=> f => g => f ;        // f is used as a value
// const Just     = x => f => g => g (x);
// const maybe    = m => f => g => m (f) (g);

const Nothing  = Left() ;        // f is used as a value
const Just     = Right  ;
// const maybe    = either ;     // convenience: caller does not need to repeat "konst"
const maybe    = m => f => either (m) (konst(f)) ;

//    bindMaybe :: m a -> (a -> m b) -> mb
const bindMaybe = ma => f => maybe (ma) (ma) (f);

// ---- curry

// curry :: ((a,b)->c) -> a -> b -> c
const curry = f => x => y => f(x,y);

// uncurry :: ( a -> b -> c) -> ((a,b) -> c)
const uncurry = f => (x,y) => f(x)(y);


// string utilities

export { padRight, padLeft }

// appends blanks to the right until the string is of size extend
// padRight :: String, Int -> String
function padRight(str, extend) {
    return "" + str + fill(str, extend);
}

// appends blanks to the left until the string is of size extend
// padLeft :: String, Int -> String
function padLeft(str, extend) {
    return "" + fill(str, extend) + str;
}

function fill(str, extend) {
    const len = str.toString().length; // in case str is not a string
    if (len > extend) {
        return "";
    }
    return " ".repeat(extend - len);
}