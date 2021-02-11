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
    constructor (name, score=0) {
        this.name = name;
        this.score = score;
    }
    
}

////////////////////////////////////////////////
// data to load into array of answer objects
////////////////////////////////////////////////

const categoryArray = ['CATEGORY ONE', 'CATEGORY TWO', 'CATEGORY THREE', 'CATEGORY FOUR', 'CATEGORY FIVE', 'CATEGORY SIX'];
const dollarValueArray = [100, 200, 300, 400, 500];
const categoryAnswerArray = [
    ['cat1:answer $100', 'cat1:answer $200', 'cat1:answer $300', 'cat1:answer $400', 'cat1:answer $500'],
    ['cat2:answer $100', 'cat2:answer $200', 'cat2:answer $300', 'cat2:answer $400', 'cat2:answer $500'],
    ['cat3:answer $100', 'cat3:answer $200', 'cat3:answer $300', 'cat3:answer $400', 'cat3:answer $500'],
    ['cat4:answer $100', 'cat4:answer $200', 'cat4:answer $300', 'cat4:answer $400', 'cat4:answer $500'],
    ['cat5:answer $100', 'cat5:answer $200', 'cat5:answer $300', 'cat5:answer $400', 'cat5:answer $500'],
    ['cat6:answer $100', 'cat6:answer $200', 'cat6:answer $300', 'cat6:answer $400', 'cat6:answer $500']
];
const categoryChoicesArray = [
    [
        ['cat1:choice $100a', 'cat1:choice $100b', 'cat1:choice $100c', 'cat1:choice $100d'],
        ['cat1:choice $200a', 'cat1:choice $200b', 'cat1:choice $200c', 'cat1:choice $200d'],
        ['cat1:choice $300a', 'cat1:choice $300b', 'cat1:choice $300c', 'cat1:choice $300d'],
        ['cat1:choice $400a', 'cat1:choice $400b', 'cat1:choice $400c', 'cat1:choice $400d'],
        ['cat1:choice $500a', 'cat1:choice $500b', 'cat1:choice $500c', 'cat1:choice $500d']
    ],
    [
        ['cat2:choice $100a', 'cat2:choice $100b', 'cat2:choice $100c', 'cat2:choice $100d'],
        ['cat2:choice $200a', 'cat2:choice $200b', 'cat2:choice $200c', 'cat2:choice $200d'],
        ['cat2:choice $300a', 'cat2:choice $300b', 'cat2:choice $300c', 'cat2:choice $300d'],
        ['cat2:choice $400a', 'cat2:choice $400b', 'cat2:choice $400c', 'cat2:choice $400d'],
        ['cat2:choice $500a', 'cat2:choice $500b', 'cat2:choice $500c', 'cat2:choice $500d']
    ],
    [
        ['cat3:choice $100a', 'cat3:choice $100b', 'cat3:choice $100c', 'cat3:choice $100d'],
        ['cat3:choice $200a', 'cat3:choice $200b', 'cat3:choice $200c', 'cat3:choice $200d'],
        ['cat3:choice $300a', 'cat3:choice $300b', 'cat3:choice $300c', 'cat3:choice $300d'],
        ['cat3:choice $400a', 'cat3:choice $400b', 'cat3:choice $400c', 'cat3:choice $400d'],
        ['cat3:choice $500a', 'cat3:choice $500b', 'cat3:choice $500c', 'cat3:choice $500d']
    ],
    [
        ['cat4:choice $100a', 'cat4:choice $100b', 'cat4:choice $100c', 'cat4:choice $100d'],
        ['cat4:choice $200a', 'cat4:choice $200b', 'cat4:choice $200c', 'cat4:choice $200d'],
        ['cat4:choice $300a', 'cat4:choice $300b', 'cat4:choice $300c', 'cat4:choice $300d'],
        ['cat4:choice $400a', 'cat4:choice $400b', 'cat4:choice $400c', 'cat4:choice $400d'],
        ['cat4:choice $500a', 'cat4:choice $500b', 'cat4:choice $500c', 'cat4:choice $500d']
    ],
    [
        ['cat5:choice $100a', 'cat5:choice $100b', 'cat5:choice $100c', 'cat5:choice $100d'],
        ['cat5:choice $200a', 'cat5:choice $200b', 'cat5:choice $200c', 'cat5:choice $200d'],
        ['cat5:choice $300a', 'cat5:choice $300b', 'cat5:choice $300c', 'cat5:choice $300d'],
        ['cat5:choice $400a', 'cat5:choice $400b', 'cat5:choice $400c', 'cat5:choice $400d'],
        ['cat5:choice $500a', 'cat5:choice $500b', 'cat5:choice $500c', 'cat5:choice $500d']
    ],
    [
        ['cat6:choice $100a', 'cat6:choice $100b', 'cat6:choice $100c', 'cat6:choice $100d'],
        ['cat6:choice $200a', 'cat6:choice $200b', 'cat6:choice $200c', 'cat6:choice $200d'],
        ['cat6:choice $300a', 'cat6:choice $300b', 'cat6:choice $300c', 'cat6:choice $300d'],
        ['cat6:choice $400a', 'cat6:choice $400b', 'cat6:choice $400c', 'cat6:choice $400d'],
        ['cat6:choice $500a', 'cat6:choice $500b', 'cat6:choice $500c', 'cat6:choice $500d']
    ]
];
const solutionKey = [
    ['A', 'B', 'C', 'D', 'A'],
    ['A', 'B', 'C', 'D', 'A'],
    ['A', 'B', 'C', 'D', 'A'],
    ['A', 'B', 'C', 'D', 'A'],
    ['A', 'B', 'C', 'D', 'A'],
    ['A', 'B', 'C', 'D', 'A']
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

    openModal: (answerObject) => {
        console.log('box click triggers openModal method');
        $divElement = $('<div>').addClass('modal-box')
        $('#game-board').append($divElement);
        h2String = 'For ' + answerObject.dollar_value + ' in ' + answerObject.category + '...';
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
            if (playerPick === answerObject.solution) {
                playerOne.score = playerOne.score + answerObject.dollar_value;
            } else {
                playerOne.score = playerOne.score - answerObject.dollar_value;
            };
            console.log('player score ' + playerOne.score);
            $('#player-score').text(playerOne.score); // create a UI method to update score with $ formatting
            console.log('check if game over');
            Game.overCheck();
        });
        ///////////////
        answerObject.answered = true;
        
    } // end openModal method


}

const EventHandlers = {
    // click on answer onClickDollarValue
    //      match element with answer object
    //      UI.openModal (pass Answer object) -> return userChoice
    //      update Player score based on userChoice
    //      change element to remove dollar amount
    //      check if gameOver

    onClickDollarValue: (e) => {
        console.log('box click triggers Event Handler method');
        console.log($(e.currentTarget).attr('id'));
        // identify which answer is chosen, call function that returns answer object
        let idNumber = parseInt($(e.currentTarget).attr('id')); // change id to a number
        let categoryIndex = Math.floor(idNumber / 10);
        let dValueIndex = idNumber % 10;
        // console.log(categoryIndex, dValueIndex);
        // find answer that matches id console log
        console.log(singleJeopardyArray[categoryIndex][dValueIndex]);
        if (!singleJeopardyArray[categoryIndex][dValueIndex].answered) {
            UI.openModal(singleJeopardyArray[categoryIndex][dValueIndex]);
            $(e.currentTarget).text(''); // remove dollar value from game board
        };
        
    }, // end onClickDollarValue method

    // onClickPlayerChoice: (e) => {
    //     console.log('text box clicked');
    //     playerPick = $(e.currentTarget).attr('id');
    //     console.log(playerPick);
    //     $divElement.remove();
    //     if (playerPick === answerObject.solution) {
    //         playerOne.score = playerOne.score + answerObject.dollar_value;
    //     } else {
    //         playerOne.score = playerOne.score - answerObject.dollar_value;
    //     };
    //     console.log('player score ' + playerOne.score);
    //     $('#player-score').text(playerOne.score); // create a UI method to update score with $ formatting
    //     console.log('check if game over');
    //     Game.overCheck();
    // }

    
}

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
        }
        if (gameOver) {
            // open gameOver modal
            console.log('game over');
        };
        
    } // end overCheck method

} // end Game object


const singleJeopardyArray = Game.loadAnswersData(categoryArray, dollarValueArray, categoryAnswerArray, categoryChoicesArray, solutionKey);
console.log(singleJeopardyArray);
const playerOne = new Player();

$( () => {

    $('.category-answer-box').on('click', EventHandlers.onClickDollarValue);
    
});