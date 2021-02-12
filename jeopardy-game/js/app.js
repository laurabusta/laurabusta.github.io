console.log("hello world");


class Answer {
    constructor (category, dollar_value, answer, choicesArray, solution, answered = false) {
        this.category = category;
        this.dollar_value = dollar_value; // integer used in score calculation
        this.answer = answer;
        this.choicesArray = choicesArray;
        this.solution = solution;
        this.answered = answered;
    }
}

class Player {
    // track player score
    constructor (name, score=0, gameOver=false, won=true) {
        this.name = name;
        this.score = score;
        this.gameOver = gameOver;
        this.won = won;
    }
    
}

////////////////////////////////////////////////
// data to load into array of answer objects
////////////////////////////////////////////////

const categoryArray = ['ENTERTAINMENT AWARDS', 'CAPITAL CITIES', 'FOOD STUFF', 'NUMBER GROUPS', 'IVY LEAGUE', 'CLASSIC MOVIE LINES'];
const dollarValueArray = [100, 200, 300, 400, 500];
const categoryAnswerArray = [
    ['A 24-KARAT GOLD-PLATED TONE ARM IS PART OF THIS AWARD THAT WEIGHS 5 POUNDS', 'RICHARD PRYOR WAS THE FIRST RECIPIENT OF THIS PRIZE FOR AMERICAN HUMOR THAT\'S NAMED FOR A 19th CENTURY NOVELIST', 'FILM DIRECTOR OF "THE TEN COMMANDMENTS" IS THE FIRST RECIPIENT OF THE HONORARY GOLDEN GLOBE THAT IS NAMED FOR HIM', 'THE MOONMAN IS THE STATUETTE COVETED AT THIS AWARD SHOW', 'THIS TOP PRIZE OF THE CANNES FILM FESTIVAL PAYS TRIBUTE TO THE CITY\'S COAT OF ARMS'],
    ['"CITY OF ANGELS, THE GREAT CITY, THE RESIDENCE OF THE EMERALD BUDDHA" IS JUST THE START OF THE OFFICIAL NAME OF THIS THAI CAPITAL', 'THE ATATURK MAUSOLEUM & THE MUSEUM OF ANATOLIAN CIVILIZATIONS ARE BOTH IN THIS CAPITAL', 'ITS LOCATION AMONG OASES & ITS NATURAL FERTILITY EARNED THIS SAUDI CAPITAL ITS NAME, FROM THE ARABIC FOR "MEADOWS"', 'FORMER US SECRETARY OF STATE MADELIEINE ALBRIGHT WAS BORN IN THIS WORLD CAPTIAL', 'IT REPLACED RAWALPINDI AS A NATIONAL CAPITAL'],
    ['IT\'S THE CEREAL THAT GOES "SNAP, CRACKLE, POP"', 'ONE OF THESE TROPICAL FRUITS OF THE GENUS MUSA HAS ONLY ABOUT 110cal, 0mg CHOLESTEROL & 400mg POTASSIUM', 'FUSILLI & ROTINI ARE BOTH TRADITIONAL PASTAS IN THIS SHAPE', 'A CLASSIC BEVERAGE OF PERU IS CHICHA DE JORA, A BREW MADE FROM THIS GRAIN THAT\'S BEEN FERMENTED', 'TO CHANGE THE PRESIDENT\'S OPINION, IN 1990 CAMPBELL\'S RELAUNCHED CREAM OF THIS SOUP WITH A RECIPE CONTEST'],
    ['"HOP IN MY CHRYSLER, IT\'S AS BIG AS A WHALE, AND IT\'S ABOUT TO SET SAIL" SANG THIS GROUP IN "LOVE SHACK", BABY', 'THIS QUARTET\'S "VERTIGO" TOUR ENDED IN 2006, HAVING GROSSED A TIDY $389 MILLION', 'MINUS TOM DeLONGE, THIS POP-PUNK BAND TOPPED THE CHARTS WITH "CALIFORNIA"', 'TRENT REZNOR IS PRETTY MUCH A ONE-MAN BAND UNDER THIS NAME', 'IT "MAKES ME WONDER" IF THIS L.A. BAND IS WELL-RED'],
    ['OH YEAH, NIETZSCHE & FREUD COMME UP IN THE "GUILD AND SHAME" PHILOSOPHY COURSE AT THIS RHODE ISLAND SCHOOL', '"PEACEMAKING" & "GRAND STRATEGY" ARE COURSE OPTIONS AT THE WOODROW WILSON SCHOOL AT THIS UNIVERSITY', 'IF AN "INTRO TO THEORETICAL NEUROSCIENCE" IS NEEDED, THIS U ON 116th ST. WOULD BE HAPPY TO ARRANGE A MEETING', 'YOU MAY SEEK "FORGIVENESS" & "ELEMENTARY SYRIAC" AT ITS NOTED DIVINITY SCHOOL', '"FUNDAMENTAL PRINCIPLES OF POLYMER CHEMISTRY"? I GUESS THIS UPSTATE NY SCHOOL HAS SOME EASY CLASSES, TOO!'],
    ['"YOU TALKIN\' TO ME?"', '"I SEE DEAD PEOPLE"', '"I HAPPEN TO HAVE MR. McLUHAN RIGHT HERE"', '"YOU WANT ANSWERS?!... YOU WANT ANSWERS?!... YOU CAN\'T HANDLE THE TRUTH!"', '"WHY WORRY? EACH OF US IS WEARING AND UNLICENSED NUCLEAR ACCELERATOR ON HIS BACK"']
];
const categoryChoicesArray = [
    [
        ['what is an emmy?', 'what is a grammy?', 'what is a tony?', 'what is a golden globe?'],
        ['who is herman melville?', 'who is charles dickens?', 'who is mark twain?', 'who is nathanial hawthorne?'],
        ['who is orson welles?', 'who is alfred hitchcock?', 'who is francis ford coppola?', 'who is cecil b demille?'],
        ['what is critics choice awards?', 'what is the kids choice awards?', 'what is MTV video music awards?', 'what is the young hollywood awards?'],
        ['what is laureates de nobel?', 'what is the fleur de lis?', 'what is the laurel wreath?', 'what is the palm d\'or?']
    ],
    [
        ['what is kampala?', 'what is bangkok', 'what is kuala lumpur?', 'what is Pyongyang?'],
        ['what is bucharest?', 'what is athens?', 'what is lebanon?', 'what is ankara?'],
        ['what is Riyadh?', 'what is Muscat?', 'What is Baghdad?', 'what is Abu Dhabi?'],
        ['What is London?', 'what is Ottawa?', 'what is prague', 'what is Warsaw?'],
        ['what is kathmandu?', 'what is new dehli?', 'what is dhaka?', 'what is islamabad?']
    ],
    [
        ['what is corn flakes?', 'what is rice krispies?', 'what is froot loops?', 'what is frosted flakes?'],
        ['what are nectarines?', 'what are avocados?', 'what are cataloupes?', 'what are bananas?'],
        ['what is a spiral?', 'what is an tubular?', 'what is a ribbon?', 'what is a shell?'],
        ['what is corn?', 'what is quinoa?', 'what is wheat?', 'what is rye?'],
        ['what is mushroom?', 'what is chicken?', 'what is brocolli?', 'what is potato?']
    ],
    [
        ['who are 10,000 maniacs?', 'who are the B-52s?', 'who are Front 242?', 'who are sixpence none the richer?'],
        ['who is U2?', 'Who is UB40?', 'who is 4 non blondes?', 'who is One Republic?'],
        ['who is sum-41?', 'who is eve6?', 'who is 311?', 'who is Blink-182?'],
        ['who is Matchbox 20?', 'who is L7?', 'who is nine inch nails?', 'Who is the Old 97s?'],
        ['who is Ben Folds Five?', 'who is third eye blind?', 'who is Maroon 5?', 'who is thee six mafia?']
    ],
    [
        ['what is providence?', 'what is brown?', 'what is dartmouth?', 'what is northwestern?'],
        ['what is wesleyan?', 'what is Upenn?', 'what is princeton?', 'what is georgetown?'],
        ['what is yale?', 'what is NYU?', 'what is columbia?', 'what is MIT?'],
        ['what is yale?', 'what is harvard?', 'what is princeton?', 'what is duke?'],
        ['what is cornell?', 'what is dartmouth?', 'what is yale?', 'what is stanford?']
    ],
    [
        ['what is my cousin vinny?', 'what is taxi driver?', 'what is goodfellas?', 'what is the godfather?'],
        ['what is ghost?', 'what is inception?', 'what is the sixth sense?', 'what is poltergeist?'],
        ['what is manhattan?', 'what is annie hall?', 'what is purple rose of cairo?', 'what is hannah and her sisters?'],
        ['what is the pelican brief?', 'what is the client?', 'what is the firm?', 'what is a few good men?'],
        ['what is ghostbusters?', 'what is back to the future?', 'what is the terminator?', 'what is war games?']
    ]
];
const solutionKey = [
    ['B', 'C', 'D', 'C', 'D'],
    ['B', 'D', 'A', 'C', 'D'],
    ['B', 'D', 'A', 'A', 'C'],
    ['B', 'A', 'D', 'C', 'C'],
    ['B', 'C', 'C', 'B', 'A'],
    ['B', 'C', 'B', 'D', 'A']
];


////////////////////////////////////////////////
// Top-Level Objects
////////////////////////////////////////////////

const UI = {
    // load game board tile values (headers only for single jeopardy only)
    //
    // launch modal
    //
    // game over window

    openAnswerModal: (answerObject) => {
        console.log('box click triggers openAnswerModal method');
        $divElement = $('<div>').addClass('modal-box');
        $('#game-board').append($divElement);
        h2String = 'For $' + answerObject.dollar_value + ' in ' + answerObject.category + '...';
        $divElement.append($('<h2>').text(h2String));
        //////////////
        const $divAnswerBox = $('<div>').addClass('modal-answer');
        $divElement.append($divAnswerBox);
        $divAnswerBox.append($('<div>').addClass('modal-answer-text').text(answerObject.answer));
        const $divChoices = $('<div>').addClass('modal-choices');
        //////////////
        let num = 0;
        const choiceId = ['A', 'B', 'C', 'D'];
        for (let answerChoice of answerObject.choicesArray) {
            // aNumChar = num.toString();
            // let idChoice = 'ch' + aNumChar;
            const $divChoicesTextBox = $('<div>').addClass('modal-choices-text-box').attr('id', choiceId[num]);
            $divChoicesTextBox.append($('<div>').addClass('modal-choices-text').text(answerChoice));
            $divChoices.append($divChoicesTextBox);
            num++;
        };
        $divElement.append($divChoices);
        ////////////////
        // this will likely get moved to event handlers
        let playerPick = null;
        // $('.modal-choices-text-box').on('click', EventHandlers.onClickPlayerChoice(answerObject));
        $('.modal-choices-text-box').on('click', (choiceEvent) => {
            console.log('text box clicked');
            playerPick = $(choiceEvent.currentTarget).attr('id');
            console.log(playerPick);
            $divElement.remove();
            if (playerPick === answerObject.solution) { // correct answer
                playerOne.score = playerOne.score + answerObject.dollar_value; 
            } else { // incorrect answer
                playerOne.score = playerOne.score - answerObject.dollar_value;
            };
            console.log('player score ' + playerOne.score);
            $('#player-score').text(playerOne.score); // create a UI method to update score with $ formatting
            // console.log('check if game over');
            Game.overCheck();
        });
        ///////////////
        answerObject.answered = true;
        
    }, // end openAnswerModal method

    openGameOverModal: () => {
        console.log('openGameOverModal');
        $divModalBox = $('<div>').addClass('modal-box');
        $('#game-board').append($divModalBox);
        $divModalBox.append($('<h2>').text('GAME OVER!'));
        //////////////
        const $divAnswerBox = $('<div>').addClass('modal-answer');
        $divModalBox.append($divAnswerBox);
        if (playerOne.won) {
            $divAnswerBox.append($('<div>').addClass('modal-answer-text').text('YOU WON!'));
        } else {
            $divAnswerBox.append($('<div>').addClass('modal-answer-text').text('YOU LOST!'));
        };
        $divAnswerBox.append($('<div>').addClass('modal-answer-text').text('SCORE: ' + playerOne.score));
        $divModalBox.append($('<h2>').text('REFRESH BROWSER TO PLAY AGAIN!'));

    } // end openGameOverModal method

} // end UI object

const EventHandlers = {
    // click on answer onClickDollarValue
    //      match element with answer object
    //      UI.openAnswerModal (pass Answer object) -> return userChoice
    //      update Player score based on userChoice
    //      change element to remove dollar amount
    //      check if gameOver

    onClickDollarValue: (e) => {
        console.log('box click triggers Event Handler method');
        console.log($(e.currentTarget).attr('id'));
        if (!playerOne.gameOver) {
            // identify which answer is chosen, call function that returns answer object
            let idNumber = parseInt($(e.currentTarget).attr('id')); // change id to a number
            let categoryIndex = Math.floor(idNumber / 10);
            let dValueIndex = idNumber % 10;
            // console.log(categoryIndex, dValueIndex);
            // find answer that matches id console log
            console.log(singleJeopardyArray[categoryIndex][dValueIndex]);
            if (!singleJeopardyArray[categoryIndex][dValueIndex].answered) {
                UI.openAnswerModal(singleJeopardyArray[categoryIndex][dValueIndex]);
                $(e.currentTarget).text(''); // remove dollar value from game board
            };
        } else {
            console.log('game over, refresh browser to play again');
        }

    }, // end onClickDollarValue method

    
} // end EventHandlers object

const Game = {

    //  loadAnswersData: receives data arrays to return a 2-d array of Answer objects
    //          designed for future expansion to load a second double jeopardy round
    loadAnswersData: (catArray, dValArray, answersArray, choicesArray, solArray) => {

        const masterAnswersArray = []; // declare return variable of 2-d array of Answer objects
        let tempCategoryAnswersArray = []; // temp array for inner for-loop that is pushed on master array
        for (let categoryIndex=0; categoryIndex<6; categoryIndex++) {
            for (let answerIndex=0; answerIndex<5; answerIndex++) {
                // create Answer object with properties from data arrays
                const tempAnswerObject = new Answer(catArray[categoryIndex], dValArray[answerIndex], answersArray[categoryIndex][answerIndex], choicesArray[categoryIndex][answerIndex], solArray[categoryIndex][answerIndex]);
                tempCategoryAnswersArray.push(tempAnswerObject); // push Answer object to array for each category
            }; // end inner for-loop
            masterAnswersArray.push(tempCategoryAnswersArray); // push category answer array from inner loop to master 2-d array of Answer objects
            tempCategoryAnswersArray = [];  // clear the temp category array from inner for-loop at end of each outer loop iteration
        }; // end outer for-loop

        return masterAnswersArray; //return 2-d array of Answer objects that can be addressed by category index and dollar value index

    }, // end loadAnswersData method

    overCheck: () => {
        // if all questions have been answered, game is over and show game over modal
        let gameOver = true;
        let unansweredDvSum = 0;
        // check all answers to see if any are not answered and sum of points left on board
        for (let catIndex=0; catIndex<6; catIndex++) {
            for (let dvIndex=0; dvIndex<5; dvIndex++) {
                if (singleJeopardyArray[catIndex][dvIndex].answered === false) {
                    gameOver = false;
                    unansweredDvSum = unansweredDvSum + singleJeopardyArray[catIndex][dvIndex].dollar_value;
                };
            }; // end inner for-loop
        }; // end outer for-loop
        console.log('Player score: ' + playerOne.score);
        console.log('Number of points left on game board: ' + unansweredDvSum);
        // if player cannot get enough points to win game, then game over
        if (playerOne.score + unansweredDvSum < 0) {
            console.log('not enough points left on board for player to win');
            gameOver = true;
            playerOne.won = false;
        }
        if (gameOver) {
            // open gameOver modal
            UI.openGameOverModal();
            console.log('game over');
            playerOne.gameOver = true;
        };
        
    } // end overCheck method

} // end Game object


const singleJeopardyArray = Game.loadAnswersData(categoryArray, dollarValueArray, categoryAnswerArray, categoryChoicesArray, solutionKey);
console.log(singleJeopardyArray);
const playerOne = new Player();

$( () => {

    $('.category-answer-box').on('click', EventHandlers.onClickDollarValue);
    
    
});