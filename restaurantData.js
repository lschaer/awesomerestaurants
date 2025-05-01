export { restaurantData, regionData }

// Regions
const regionData = {
  "Regions" : [
    {
      "name": "Altdorf"
    },
    {
      "name": "Basel-Stadt"
    },
    {
      "name": "Cham"
    },
    {
      "name": "Davos"
    },
    {
      "name": "Freiamt"
    },
    {
      "name": "Losone"
    },
    {
      "name": "Luzern"
    },
    {
      "name": "Seelisberg"
    },
    {
      "name": "Sempachersee"
    },
    {
      "name": "Stans"
    },
    {
      "name": "Zug"
    },
    {
      "name": "Zürich"
    }
    ]
};


// Restaurant-Data
const restaurantData = {
  "Restaurants": [
    {
      "name": "Ristorante Grotto Broggini",
      "regionID" : "Losone",
      "description": "Einige sagen - das beste Güggeli im Tessin. Auf jedenfall wunderbar und jedesmal super lecker. Dazu gibt es Gemüse oder Pommes. Natürlich sind auch andere Gerichte toll, das Poulet vom Grill ist aber sicherlich der Star. Dazu gibt es tolles Ambiente und lokalen Wein.",
      "rating": "4",
      "category": "leger",
      "maps_link": "https://maps.app.goo.gl/5ZGYsr3tToTngQoj7?g_st=ic",
      "last_update": "01 Sep 2019"
    },
    {
      "name": "RIO churrasco",
      "regionID" : "Stans",
      "description": "Perfekt für einen Abend mit Freunden. Die Beilagen holt jeder selbst, das Fleisch wird am Spiess direkt an den Tisch geliefert. Dabei ist auch Zebra oder Känguru dabei. Insgesamt ein gelungenes Erlebnis und man geht sicher nicht hungrig nach Hause. Zum Apero empfiehlt sich Caipirinha.",
      "rating": "3",
      "category": "leger",
      "maps_link": "https://maps.app.goo.gl/wpWGVoABK8TDsUwz9?g_st=ic",
      "last_update": "19 Apr 2024"
    },
    {
      "name": "Villa Honegg",
      "regionID" : "Stans",
      "description": "Eine wunderbare Aussicht! Links am Hang von Ennetbürgen und das Essen ist nicht weniger spektakulär. Es empfiehlt sich das Menu mit 4 oder 5 Gängen. Dieses stellt man nach belieben zusammen. Die Weinempfehlung war wunderbar und sehr passend. Gerne wieder!",
      "rating": "5",
      "category": "très chic",
      "maps_link": "https://maps.app.goo.gl/GmBPHFnsCFFXRzvs9?g_st=ic",
      "last_update": "1 Apr 2024"
    },
    {
      "name": "Restaurant Trögli",
      "regionID" : "Altdorf",
      "description": "Herzhaftes Essen in heimeliger Umgebung. Es empfiehlt sich das Filet auf dem heissen Stein und zwar am besten mit Kroketten. Dazu vielleicht etwas Rotwein.",
      "rating": "2",
      "category": "leger",
      "maps_link": "https://goo.gl/maps/1TuutpRao8qUHjjA6",
      "last_update": "3 May 2023"
    },
    {
      "name": "Fomaz",
      "regionID" : "Altdorf",
      "description": "Einmal quer durch die Karte mit unterschiedlichen kleinen Tellern. Perfekt zum Teilen in der Mitte des Tischs. Von Fleisch oder Vegi bis zu veganen Variationen, hungrig bleibt man definitiv nicht und es lassen sich neue Kreationen entdecken.",
      "rating": "3",
      "category": "leger",
      "maps_link": "https://goo.gl/maps/W9i3PUKjSBhUiZrT6",
      "last_update": "30 May 2023"
    },
    {
      "name": "Restaurant Schäfli",
      "regionID" : "Altdorf",
      "description": "Toll für Wild aber auch bekannt für grosse und leckere Cordon Bleue. Gemütliche Atmosphäre in währschafter Umgebung. Jeweils gut ausgebucht, insbesondere an Wochenenden.",
      "rating": "4",
      "category": "leger",
      "maps_link": "https://maps.app.goo.gl/3wMZxLGvfkZLDiJq8",
      "last_update": "8 Jan 2022"
    },
    {
      "name": "Schlossrestaurant A Pro",
      "regionID" : "Altdorf",
      "description": "Wunderschöne Location im Schloss in Seedorf. Gemütliche Atmosphäre und bestes Essen. Die Gastfreundschaft und das umsichtige Personal machen den Besuch sehr angenehm. Es empfihelt sich ein Menu mit z.B. 5 Gängen. Damit erhält man ein tolles Bild der unterschiedlichen Variationen, welche jeweils an die Saison angepasst sind.",
      "rating": "4",
      "category": "gehoben",
      "maps_link": "https://maps.app.goo.gl/L2MeY9uCfHbjRrXNA",
      "last_update": "9 Feb 2024"
    },
    {
      "name": "Antons",
      "regionID" : "Luzern",
      "description": "Ein etwas verstecktes, aber sehr einladendes Restaurant. Saisonale und wechselnde Karte mit Empfehlungen direkt am Tisch. Perfekt, um auch mal etwas Neues auszuprobieren und neue Kombinationen kennenzulernen. Von Fisch zu Fleisch, aber auch vegetarische Gerichte finden sich in der übersichtlichen Karte. Sehr nettes Personal und tolles Ambiente.",
      "rating": "4",
      "category": "leger",
      "maps_link": "https://goo.gl/maps/5ye4p1nGfycizkVf9",
      "last_update": "4 Jul 2023"
    },
    {
      "name": "Stall Valär",
      "regionID" : "Davos",
      "description": "Schöne Location und wunderbares Essen. Zum leckeren Essen mit klassischen Gerichten neu interpretiert gibt es auch tollen Wein passend zum Ambiente. Auf jeden Fall einen Besuch wert. Auch mit einer größeren Gruppe möglich. Sicherlich vorher reservieren, da jeweils sehr gut ausgebucht.",
      "rating": "4",
      "category": "gehoben",
      "maps_link": "https://maps.app.goo.gl/i336RWcasGdu8bMM8",
      "last_update": "27 Oct 2023"
    },
    {
      "name": "Adler",
      "regionID" : "Freiamt",
      "description": "Fischknusperli und Salat mit leckerer Sauce. Am besten im Garten mit einem regionalen Bier (Erusbacher). Optimal für Mittag oder Abend.",
      "rating": "2",
      "category": "leger",
      "maps_link": "https://maps.app.goo.gl/bCzy6Haz79Rf6mYh8?g_st=ic",
      "last_update": "20 Jun 2023"
    },
    {
      "name": "Restaurant Neustadt",
      "regionID" : "Luzern",
      "description": "Klassische \"Beiz\" mit tollem Angebot für einen gemütlichen Abend mit Freunden. Es soll weitaus mehr geben auf der Karte als das Cordon Bleu, jedoch ist dies definitiv ein Muss, am besten mit Pommes und Gemüse. Wichtig ist, dass nur bar bezahlt werden kann. Reservationen sicherlich am Wochenende empfohlen.",
      "rating": "2",
      "category": "leger",
      "maps_link": "https://goo.gl/maps/cLXFwBp8X49BcZjJA",
      "last_update": "01 May 2023"
    },
    {
      "name": "Wolf Burger",
      "regionID" : "Luzern",
      "description": "Burger der unterschiedlichsten Art von Classic und Special zu Vegi. Zusammen mit Pommes oder Salat ist das Ganze nicht ganz günstig, allerdings lohnenswert. Gutes Bier noch dazu und der Feierabend ist total entspannt. Im Sommer draußen auf dem Helvetiaplatz fast noch besser und normalerweise sehr gut besucht.",
      "rating": "2",
      "category": "leger",
      "maps_link": "https://goo.gl/maps/DNb4XLidZbTNDz88A",
      "last_update": "01 May 2023"
    },
    {
      "name": "Geissmatt",
      "regionID" : "Luzern",
      "description": "Lass dich von einem Überraschungsmenu auf der schönen Terrasse begeistern. Es besteht die Möglichkeit auf Fleisch oder Fisch zu verzichten. Abgerundet wird das Essen am besten mit einer Weinempfehlung des Chefs. Einem tollen Abend steht dabei definitiv nichts mehr im Wege. Es empfiehlt sich eine Reservation vorzunehmen, vor allem am Wochenende. Zu zweit oder in einer Gruppe - beides eine tolle Möglichkeit.",
      "rating": "5",
      "category": "gehoben",
      "maps_link": "https://goo.gl/maps/DNjekNdo8tqsktd79",
      "last_update": "03 May 2023"
    },
    {
      "name": "Peperoncini Obergrund",
      "regionID" : "Luzern",
      "description": "Wunderbare Pizza, am besten mit luftigem neapolitanischem Teig. Schöner Holzofen im Keller verhilft dabei zum perfekten Boden. Entspanntes Ambiente im Restaurant oder draußen. Zu zweit oder in kleinen Gruppen für den Start in einen langen oder einfach nur gemütlichen Abend.",
      "rating": "3",
      "category": "leger",
      "maps_link": "https://maps.app.goo.gl/ymJhxHLjquDcsZZC8?g_st=ic",
      "last_update": "01 Feb 2023"
    },
    {
      "name": "Barbès-Restaurant-Bar ",
      "regionID" : "Luzern",
      "description": "Leckeres marokkanisches Restaurant mit großer Auswahl an Mezze zum Teilen. Tolles und authentisches Ambiente. Gutes Bier und Wein laden auch zu einem Feierabendgetränk ein. Im Sommer lässt sich auch herrlich draußen Platz nehmen.",
      "rating": "3",
      "category": "leger",
      "maps_link": "https://goo.gl/maps/kFigU2taLX6Gz39y9",
      "last_update": "05 Apr 2023"
    },
    {
      "name": "Izakaya Nozomi",
      "regionID" : "Luzern",
      "description": "Japanisches Restaurant mit großer Auswahl. Saisonale Gerichte schaffen eine zusätzliche Abwechslung zur bestehenden Karte. Das Izakaya-Erlebnis nimmt dir die Qual der Wahl ab und bringt dich quer durch die Karte. Am Mittag gibt es hier auch tolle Bento-Boxen to-go. Gemütliche Atmosphäre und authentisch japanisch. Reservationen sind hier jeweils zu empfehlen.",
      "rating": "4",
      "category": "leger",
      "maps_link": "https://goo.gl/maps/ZkQVi6xNefvRpcod6",
      "last_update": "15 May 2023"
    },
    {
      "name": "Negishi",
      "regionID" : "Luzern",
      "description": "Leckere Auswahl an Sushi und perfekt zum Teilen. Wer keine einzelne Auswahl treffen will, nimmt am besten eine der vorgeschlagenen Sushi-Platten. Vielleicht noch die Crispy Nigiri als Vorspeise und ein japanisches Bier. Perfekt für einen gemütlichen Abend auch während der Woche.",
      "rating": "3",
      "category": "leger",
      "maps_link": "https://goo.gl/maps/qF1g6h6kc4F3Ejc58",
      "last_update": "16 May 2023"
    },
    {
      "name": "Portofino",
      "regionID" : "Luzern",
      "description": "Schöne Location und gemütliches Ambiente. Im Sommer lohnt es sich definitiv draußen zu sitzen, besonders an einem lauen Sommerabend. Unterschiedliche Antipasti, Pasta, Fisch oder Fleisch – alles, was die italienische Küche so zu bieten hat. Zum Schluss darf aus meiner Sicht der Limoncello nicht fehlen.",
      "rating": "3",
      "category": "leger",
      "maps_link": "https://goo.gl/maps/dbnWX6V7HTdx69tM6",
      "last_update": "30 May 2023"
    },
    {
      "name": "Felsenegg",
      "regionID" : "Luzern",
      "description": "Entspanntes Ambiente und ein Ort zum Wohlfühlen. Ob draußen im Garten oder im schönen Saal, stilvolles Restaurant mit leckerer Auswahl. Vielfältige aber übersichtliche Auswahl an Speisen und immer auch aktuelle Tages-/Wochenangebote.",
      "rating": "4",
      "category": "gehoben",
      "maps_link": "https://goo.gl/maps/SARnBEDzgGK2cHRM9",
      "last_update": "28 Jun 2023"
    },
    {
      "name": "La Bestia",
      "regionID" : "Luzern",
      "description": "Tolle Pizza, wahrscheinlich eine der besten in Luzern. Das Ambiente im Restaurant ist angenehm, allerdings meist sehr gut besetzte Tische und der Platz etwas eng. Alles in allem wunderbar für eine leckere Pizza unter der Woche oder am Wochenende. Reservierung ist sehr zu empfehlen.",
      "rating": "3",
      "category": "leger",
      "maps_link": "https://goo.gl/maps/8dKCVZZYXmKBCggs6",
      "last_update": "26 Jul 2023"
    },
    {
      "name": "Takrai",
      "regionID" : "Luzern",
      "description": "Perfekter Thai Food und genau dafür eine der besten Adressen in Luzern. Oftmals gut ausgebucht, aber ein kleines Plätzchen ist meist zu finden. Als Vorspeise empfehlen sich die Kokos-Crevetten und die Frühlingsrollen. Zum Hauptgang finden sich z.B. mehrere Currys oder milde/scharfe Takrai Specials.",
      "rating": "3",
      "category": "leger",
      "maps_link": "https://maps.app.goo.gl/RCfXyxd27r8i3mpW8",
      "last_update": "13 Oct 2023"
    },
    {
      "name": "Stadtalp",
      "regionID" : "Luzern",
      "description": "Währschafte Küche am Stadtrand von Luzern in Emmen. Fondue mit Freunden, Burger, Chicken Wings oder Tatar in vielen Variationen. Auch als Eventlocation nutzbar für einen tollen Abend. Zuvorkommendes Personal und tolles Essen.",
      "rating": "4",
      "category": "leger",
      "maps_link": "https://maps.app.goo.gl/s2BknGuUAPnVgLmU6",
      "last_update": "16 Oct 2023"
    },
    {
      "name": "Fed Restaurant & Bar",
      "regionID" : "Luzern",
      "description": "Entspannte und stylische Location in Luzern. Das Essen ist zum Teilen ausgelegt, und es empfiehlt sich, ein 2-3 Gang Menü servieren zu lassen. Neues Probieren ist dadurch einfach möglich und macht Freude. Am besten sucht man sich in der oberen Etage einen Platz, da es sonst etwas laut ist im Raum unten. Nicht ganz günstig, aber sehr lecker.",
      "rating": "3",
      "category": "leger",
      "maps_link": "https://maps.app.goo.gl/ehrUYoRRRiBbhXHx9",
      "last_update": "23 Oct 2023"
    },
    {
      "name": "Restaurant Volligen",
      "regionID" : "Seelisberg",
      "description": "Beste Aussicht auf den Vierwaldstättersee. Feine Cordon Bleu in unterschiedlichen Variationen. Ob mit dem Boot von der Treib her oder über Seelisberg, dieser Ort ist immer die Reise wert. An einem warmen Sommerabend den Sonnenuntergang, ein Aperitif auf der Terrasse und das feine Essen genießen.",
      "rating": "2",
      "category": "leger",
      "maps_link": "https://goo.gl/maps/p4DeRqtW6ryDnF4i7",
      "last_update": "20 Jul 2023"
    },
    {
      "name": "Culinarum Alpinum",
      "regionID" : "Stans",
      "description": "Das schöne ehemalige Kapuzinerkloster in Stans lädt zu einer leckeren Tavolata ein. Unterschiedliche Gerichte mit lokalen Zutaten für die Mitte des Tischs und zum Teilen. Die Auswahl kann man selbst vornehmen oder man überlässt dies dem Küchenchef mit dem Überraschungsmenu. Genügend gibt es für jeden und jede, und es wird auch gerne nochmals nachgeschöpft. Den passenden Wein aus der Schweiz findet man selbst in der begehbaren Weinkarte im Weinkeller. Perfekt.",
      "rating": "4",
      "category": "leger",
      "maps_link": "https://goo.gl/maps/ATQAHpoYxdsVFFtK9",
      "last_update": "26 May 2023"
    },
    {
      "name": "Yu-an",
      "regionID" : "Zürich",
      "description": "Diverse Auswahl an Sushi Rolls, Tempura, Ramen und Poke Bowls. Besonders zu empfehlen sind die Inside-Out Rolls, beispielsweise Spicy Tuna. Perfekt zum Teilen und in die Mitte des Tischs. Passendes japanisches Bier, Wein, Sake zum Abrunden.",
      "rating": "3",
      "category": "leger",
      "maps_link": "https://maps.app.goo.gl/mDUHcqzGiR3BfDYq9?g_st=ic",
      "last_update": "03 Mar 2023"
    },
    {
      "name": "Co chin chin",
      "regionID" : "Zürich",
      "description": "Tolles vietnamesisches Restaurant mitten in Zürich. Perfekt für ein Mittag oder Abend. Wer es gerne etwas scharf mag, kommt hier definitiv auf seine Kosten. Sehr empfehlenswert: \"Pho Bo\" und Summer Rolls als Vorspeise. Dazu gibt es sehr leckeren und starken Ingwer-Eistee.",
      "rating": "4",
      "category": "leger",
      "maps_link": "https://goo.gl/maps/idvP1dj9KLFbs19GA?coh=178573&entry=tt",
      "last_update": "11 Nov 2022"
    },
    {
      "name": "DAR Restaurant und Cocktail Bar",
      "regionID" : "Zürich",
      "description": "Marokkanisch-spanisches Restaurant mit unterschiedlichsten Gerichten zum Teilen. Alles ist \"plant based\", es fehlt aber definitiv an nichts. Wenn man es nicht unbedingt mag, die unterschiedlichen Gerichte auszuwählen, kann man sich mit dem Menü auch einfach überraschen lassen und die Auswahl den Experten überlassen. Cocktails oder klassische Drinks zum Apero passen hier ebenfalls perfekt dazu, insbesondere um den Abend im Garten zu genießen.",
      "rating": "4",
      "category": "leger",
      "maps_link": "https://goo.gl/maps/Bm3coccjNNvvXBSm8?coh=178573&entry=tt",
      "last_update": "01 Feb 2023"
    },
    {
      "name": "Gaijin Izakaya",
      "regionID" : "Zürich",
      "description": "tolles probiermenu wo jeder/jede sicherlich genügend zu essen erhält. japanisches essen aber nicht nur sushi und co sondern auch sehr abwechslungsreiches und neues zu entdecken. mit bisschen sake toll abgerundet.",
      "rating": "4",
      "category": "leger",
      "maps_link": "https://goo.gl/maps/sJcFcycKjdXHfubf6",
      "last_update": "4 May 2023"
    },
    {
      "name": "Miki Ramen",
      "regionID" : "Zürich",
      "description": "1A Ramen und Ambiente - authentisch japanische Küche. Eher kleine Karte, aber tolle Auswahl. Passend dazu erhält man diverse japanische Teesorten oder kühle Getränke. Bisher mein Favorit, wenn es um Ramen in Zürich geht!",
      "rating": "3",
      "category": "leger",
      "maps_link": "https://goo.gl/maps/AzZQUzyXCordKNA26",
      "last_update": "14 Nov 2023"
    },
    {
      "name": "Steakhouse Bahnhof",
      "regionID" : "Zug",
      "description": "Eigentlich in Mettmenstetten, aber sozusagen in der „Aglo-Zug“ zu finden. Bestes Steakhouse in dieser Region mit großer Auswahl. 200-500g möglich oder Tomahawk pro Kilogramm zum Teilen. Ribeye Steak empfiehlt sich sehr, zusammen mit Blattspinat, Pommes oder Grillgemüse. Auch ein Glas Wein oder das lokale Bier passt vortrefflich und macht jeden Besuch zu einer Freude. Immer gut gebucht, auch unter der Woche.",
      "rating": "3",
      "category": "leger",
      "maps_link": "https://maps.app.goo.gl/C9NAzZD32qEb9D2m7?g_st=ic",
      "last_update": "23 Mar 2024"
    },
    {
      "name": "Piu",
      "regionID" : "Zug",
      "description": "Einladendes Ambiente, leckere Pasta oder Pizza und definitiv empfehlenswert. Für ein tolles Mittagessen oder am Abend. Das Lokal befindet sich in der alten Poststelle und bringt einiges an Charme mit. Der Holzofen begeistert gleich beim Eingang und lässt perfekte Pizzen vermuten.",
      "rating": "4",
      "category": "leger",
      "maps_link": "https://goo.gl/maps/7M7hLGuMP12NYBV56",
      "last_update": "09 Aug 2023"
    },
    {
      "name": "Restaurant Raben",
      "regionID" : "Cham",
      "description": "Im Herzen von Cham, perfekt für ein Mittagessen. Unterschiedliche Mittagsmenüs zu fairen Preisen, inklusive Salat oder Suppe. Schneller und freundlicher Service.",
      "rating": "3",
      "category": "leger",
      "maps_link": "https://goo.gl/maps/wGiWzgberWYKaemg8",
      "last_update": "14 Sep 2023"
    },    
    {
      "name": "Hello World",
      "regionID" : "Zug",
      "description": "Tolle Mittagsmenü und gute Auswahl. Perfekt für ein kurzes Treffen am Mittag oder Abend. Nettes Personal und angenehmes Ambiente. Jeweils gut ausgebucht unter der Woche.",
      "rating": "3",
      "category": "leger",
      "maps_link": "https://maps.app.goo.gl/Wq3wfDxEHAZzjiY58?g_st=ic",
      "last_update": "14 Oct 2023"
    },
    {
      "name": "Zwyssighaus",
      "regionID" : "Altdorf",
      "description": "Wunderbares Ambiente im kleinen Dorf Bauen. Die Gastgeberin führt mit einer ansteckenden Leidenschaft und Freude durch den Abend. Die Karte ist vielfältig und bietet Gerichte aus lokalen Zutaten. Wunderschön angerichtet und perfekt im Geschmack. Wie viele Gänge man mag, kann jeder selbst bestimmen. Mit vier Gängen sollte alle auf ihre Kosten kommen, zusammenstellen kann man selbst was man mag. Ausgezeichnet und gerne wieder.",
      "rating": "5",
      "category": "gehoben",
      "maps_link": "https://maps.app.goo.gl/x6dufaKMUBxhiHBL8",
      "last_update": "21 Mar 2024"
    },
    {
      "name": "Bahnhöfli",
      "regionID" : "Sempachersee",
      "description": "Immer gut besucht, eine Reservation ist definitiv zu empfehlen. Ob Burger mit Curly Fries, Rinds-Tatar oder der Tagesteller mit saisonaler Auswahl, die Gerichte sind schön angerichtet und super lecker. Das Ambiente im alten Bahnhofsgebäude hat viel Charme und ist angenehm. Als Bierliebhaber findet sich zudem eine grosse und wechselnde Auswahl diverser Biersorten, zum Wohl.",
      "rating": "4",
      "category": "leger",
      "maps_link": "https://maps.app.goo.gl/UYXKjwxJ2p7xpsNh7",
      "last_update": "22 Mar 2024"
    },
    {
      "name": "Ristorante & Pizzeria Fischmärt",
      "regionID": "Zug",
      "description": "Entspannte Location insbesondere im Sommer. Draussen sitzen am Mittag ist auch im Hochsommer möglich, da innerhalb der engen Gasse noch schöne Schattenplätze verfügbar sind. Italienische Küche mit Pizza, Pasta oder Risotto empfiehlt sich sehr ob am Mittag oder Abend. Eine Reservation ist zu empfehlen.  ",
      "rating": "3",
      "category": "leger",
      "maps_link": "https://maps.app.goo.gl/B1qk6LbjNz3hYNZS9",
      "last_update": "05 Sep 2024"
    },
    {
      "name": "Baan Thai - Focus Hotel",
      "regionID": "Sempachersee",
      "description": "Thailandische Küche mit einer grossen Auswahl. Vorspeisen zum Teilen sind fast ein Muss und auch das Thailandische Bier passt vorzüglich dazu. Ob Crevetten, Rindfleisch, Poulet oder Tofu, es findet sich sicher für jeden etwas passendes.",
      "rating": "4",
      "category": "leger",
      "maps_link": "https://maps.app.goo.gl/KmeKU5wYHGDTYc5PA",
      "last_update": "05 Sep 2024"
    },
    {
      "name": "yume Ramen",
      "regionID": "Zürich",
      "description": "Gyoza zur Vorspeise, Tantanmen Ramen danach und am besten ein paar Mochi zum Abgang - die perfekte Kombi. Authentisch japanisches Ambiente und super lecker. Meist sehr gut besucht und eine Reservation von Vorteil. Breite Auswahl an unterschiedlichen Ramen Gerichte und optional schärfere Varianten möglich. Itadakimasu!",
      "rating": "4",
      "category": "leger",
      "maps_link": "https://maps.app.goo.gl/ofjVMn7y8Utpun528",
      "last_update": "26 Sep 2024"
    }
,
  {
  "name": "Kronenhalle",
  "description": "Eleganz und Tradition mit währschaften Gerichten. In der Kronenhalle muss man einfach mal gegessen haben. Zürigschnätzlets mit Rösti ist einer der klassiker und sehr empfehlenswert. Zur Vorspeise ist der Crevettencocktail vorzüglich und das Dessert - Mousse au chocolat mit double crème de Gruyère.",
  "rating": "4",
  "category": "gehoben",
  "regionID": "Zürich",
  "maps_link": "https://maps.app.goo.gl/gx3WwHtUvJJuZiR1A",
  "last_update": "18 Aug 2024"
},
  {
  "name": "Brasserie Bodu",
  "description": "Charmante Location in der Altstadt von Luzern. Eine wechselnde saisonale Speisekarte und eine ausgezeichnete Weinauswahl lässt für jeden etwas finden. Das Ambiente ist gemütlich und erinnert an klassische französische Bistros. Das Entrecôte Café de Paris ist ein Muss. ",
  "rating": "4",
  "category": "gehoben",
  "regionID": "Luzern",
  "maps_link": "https://maps.app.goo.gl/pCm9eDGkyaX4gGRr5",
  "last_update": "04 Oct 2024"
},
  {
  "name": "Ristorante Giessenhof",
  "description": "In Dallenwil findet sich nicht nur der tollste Geisskäse sondern auch empfehlenswerte Restaurants. Ob Pizza oder Wildspezialität im Herbst, die Karte lässt hier nichts zu wünschen übrig. Auch für ein Mittagsmenu eine passende Adresse. ",
  "rating": "2",
  "category": "leger",
  "regionID": "Stans",
  "maps_link": "https://maps.app.goo.gl/BtzVPLbh5iTXeNB38",
  "last_update": "10 Oct 2024"
},
  {
  "name": "Pizzeria Da Pino",
  "description": "Auf der Suche nach einer knusprigen Pizza am Abend oder Mittag? Bei Da Pino bist du richtig. Entspannt, schnell und freundlich! Feine Pizza - Meine Wahl ist hier jeweils die Pizza Calzone und auch das Tiramisu zum Dessert ist zu empfehlen. Enjoy!",
  "rating": "3",
  "category": "leger",
  "regionID": "Zug",
  "maps_link": "https://maps.app.goo.gl/AnqgXbeBUrPWorpy8",
  "last_update": "22 Oct 2024"
},
  {
  "name": "Neue Taverne",
  "description": "Tolles vegetarisches Restaurant im Herzen von Zürich. Tavolata mit Überraschungsmenu lässt neues entdecken und ist einfach zum geniessen. Der Service ist zudem 1A und es macht einfach Freude einen Abend dort zu verbringen.",
  "rating": "4",
  "category": "leger",
  "regionID": "Zürich",
  "maps_link": "https://maps.app.goo.gl/QiiKRrPBzgFFG7ju6?g_st=ic",
  "last_update": "26 Oct 2024"
},
  {
  "name": "QIRIN - Sushi & Drinks",
  "description": "Schönes Sushi Restaurant im Herzen von Luzern. Einladende Atmosphäre und qualitativ hochwertiges Essen. Nicht günstig aber sicherlich einen Besuch wert. Sushi in unterschiedlichsten Variationen. Enjoy!",
  "rating": "4",
  "category": "leger",
  "regionID": "Luzern",
  "maps_link": "https://maps.app.goo.gl/Nk83NT4BhP5a33zM7",
  "last_update": "10 Apr 2025"
},
  {
  "name": "Restaurant Chiffon",
  "description": "Der charme eines französischen Bistro und leckeres Essen machen den Besuch hier zu einer wahren Freude. Eines der besten Restaurants in Zürich, wenn man nach `POT DE MOULES À LA CRÈME` sucht. Eine Reservation lohnt sich um sicherlich einen Platz zu finden. bon appétit!",
  "rating": "4",
  "category": "gehoben",
  "regionID": "Zürich",
  "maps_link": "https://maps.app.goo.gl/C1KxtYmoiHRkQyTJA",
  "last_update": "10 Apr 2025"
},
  {
  "name": "Gifthüttli",
  "description": "\"... Bier, das nicht direkt beim Bierbrauer getrunken werde, ist Gift.\" So kam dieses traditionsreiche Restaurant vor etwa 120 Jahren zu seinem Namen. Heute gibt es leckeres traditionelles Essen wie zum Beispiel Cordon-Bleue in unterschiedlichen Ausführungen. Auch aktuelles wie Spargeln im Frühling finden den Weg auf die Speisekarte. Perfekt für einen Abend mit Freunden im Herzen von Basel.",
  "rating": "4",
  "category": "leger",
  "regionID": "Basel-Stadt",
  "maps_link": "https://maps.app.goo.gl/4ihRubnLz87jA5Vn6",
  "last_update": "01 May 2025"
}]
};

