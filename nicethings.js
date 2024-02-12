export { TitleLetters, getStarRating }

// Sleep function used in other functions to delay execution
const sleep = ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

// Display Letters with a predefined text, speed and delay
const TitleLetters = async (word,elementId,time,delay) => {
    await sleep(delay);  // delay before display
    for (let i = 0; i < word.length; i++) {
        if(word[i] === " "){
            document.getElementById(elementId).innerHTML += "<br/>";
        } else {
            document.getElementById(elementId).innerHTML += word[i];
        }
        await sleep(time);
    }
};

// Convert number rating into Star Rating with solid and empty stars from 1 to 5
const getStarRating = rating => {
    const star      = `&#9733;`;
    const emptyStar = `&#9734;`;
    switch(rating){
        case '1':
            rating = star +                     emptyStar + emptyStar + emptyStar + emptyStar;
            break;
        case '2':
            rating = star + star +               emptyStar + emptyStar + emptyStar;
            break;
        case '3':
            rating = star + star + star +        emptyStar + emptyStar;
            break;
        case '4':
            rating = star + star + star + star + emptyStar;
            break;
        case '5':
            rating = star+star+star+star+star;
            break;
    }
    return rating;
};