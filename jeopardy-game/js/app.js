console.log("hello world");

// load data
// connect html element to data object
// game logic

// create game class with overall game logic and functions

// create an array of answer objects

class Answer {
    constructor (category, dollar_value, answer, choicesArray, solution, answered) {
        this.category = category;
        this.dollar_value = dollar_value;
        this.answer = answer;
        this.choicesArray = choicesArray;
        this.solution = solution;
        this.answered = answered;
    }
}

class Player {
    // track player score
    
}

////////////////////////////////////////////////
// data to load into array of answer objects
////////////////////////////////////////////////

const categoryArray = ['CATEGORY ONE', 'CATEGORY TWO', 'CATEGORY THREE', 'CATEGORY FOUR', 'CATEGORY FIVE', 'CATEGORY SIX'];
const dollarValueArray = ['$100', '$200', '$300', '$400', '$500'];
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
    [0,1,2,3,0],
    [0,1,2,3,0],
    [0,1,2,3,0],
    [0,1,2,3,0],
    [0,1,2,3,0],
    [0,1,2,3,0]
];

// tested the data arrays
// console.log(categoryArray[0]);
// console.log(dollarValueArray[1]);
// console.log(categoryAnswerArray[2][3]);
// console.log(categoryChoicesArray[5][3]);
// console.log(solutionKey[1][3]);

////////////////////////////////////////////////////
// load data into array of objects of class answer
////////////////////////////////////////////////////

// test creating one Answer object
// const testAnswerObject = new Answer(categoryArray[0], dollarValueArray[0], categoryAnswerArray[0][0], categoryChoicesArray[0][0], solutionKey[0][0]);
// console.log(testAnswerObject);


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
        let num = 1;
        for (let playerChoice of answerObject.choicesArray) {
            $divChoices.append($('<p>').text(num + ". " + playerChoice));
            num++;
        };
        $divElement.append($divChoices);
        //////////////
        const $radioForm = $('<form>')
        for (let i=0; i<4; i++) {
            numString = i.toString();
            let aNum = i + 1;
            let radioLabelString = aNum.toString();
            $radioForm.append('<input type="radio" name="choice" value="' + numString + '">' + radioLabelString);
        };
        $radioForm.append('<input type="submit" value="submit" id="submit">');
        // $radioForm.append('<button type="button">Click Me!</button>');
        $divElement.append($radioForm);
        $('form').on('submit', (submitEvent) => {
            submitEvent.preventDefault();
            console.log('submit button clicked');
            console.log($('form'));
            $divElement.remove();
        });
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
        UI.openModal(singleJeopardyArray[categoryIndex][dValueIndex]);



    } // end onClickDollarValue method

    
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

    } // end loadAnswersData method

} // end Game object


const singleJeopardyArray = Game.loadAnswersData(categoryArray, dollarValueArray, categoryAnswerArray, categoryChoicesArray, solutionKey);
console.log(singleJeopardyArray);


$( () => {

    $('.category-answer-box').on('click', EventHandlers.onClickDollarValue);

 /* moved all this code to EventHandlers object, will remove this block
    $('.category-answer-box').on('click', (event) => {
        // console.log('box clicked');
        // console.log($(event.currentTarget).attr('id'));
        // identify which answer is chosen, call function that returns answer object
        let idNumber = parseInt($(event.currentTarget).attr('id')); // change id to a number
        let categoryIndex = Math.floor(idNumber / 10);
        let dValueIndex = idNumber % 10;
        // console.log(categoryIndex, dValueIndex);
        // find answer that matches id console log
        console.log(singleJeopardyArray[categoryIndex][dValueIndex]);

    })
*/

});