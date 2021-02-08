console.log("hello world");

// load data
// connect html element to data object
// game logic

// create game class with overall game logic and functions

// create an array of answer objects

class Answer {
    constructor (category, dollar_value, answer, choicesArray, solution) {
        this.category = category;
        this.dollar_value = dollar_value;
        this.answer = answer;
        this.choicesArray = choicesArray;
        this.solution = solution;
    }
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

// category loop {
//
//      {answer loop
//          create array of answer objects for category}
//
//      push array of answer objects into master array of categories
//      gameAnswerArray [0][0] - 2d array, [categoryIndex], [dollarValueIndex]
// }

const masterAnswerArray = [];
let tempAnswerObjectArray = [];
for (let categoryIndex=0; categoryIndex<6; categoryIndex++) {
    for (let answerIndex=0; answerIndex<5; answerIndex++) {
        const tempAnswerObject = new Answer(categoryArray[categoryIndex], dollarValueArray[answerIndex], categoryAnswerArray[categoryIndex][answerIndex], categoryChoicesArray[categoryIndex][answerIndex], solutionKey[categoryIndex][answerIndex]);
        tempAnswerObjectArray.push(tempAnswerObject);
    };
    masterAnswerArray.push(tempAnswerObjectArray);
    tempAnswerObjectArray = [];  // clear the temporary array of Answers that are pushed on the master Array for next loop iteration
};
console.log(masterAnswerArray);

///////////////////////////////
// event handling
///////////////////////////////

$( () => {

    $('.category-answer').on('click', (event) => {
        console.log('box clicked');
        console.log($(event.currentTarget).attr('id'));
        // identify which answer is chosen, call function that returns answer object
        console.log(Number.isNaN($(event.currentTarget).attr('id'))); //checking if id is a number
    })

});