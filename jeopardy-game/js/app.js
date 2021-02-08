console.log("hello world");

// create game class with overall game logic and functions

// create an array of answer objects

class answer {
    constructor () {
        this.category = category;
        this.dollar_value = dollar_value;
        this.answer = answer;
        this.choices = [];
        this.solution = null;
    }
}

// load data to answer array
// 

const categoryArray = ['CATEGORY ONE', 'CATEGORY TWO', 'CATEGORY THREE', 'CATEGORY FOUR', 'CATEGORY FIVE', 'CATEGORY SIX'];
const dollarValueArray = ['$100', '$200', '$300', '$400', '$500'];
const categoryAnswerArray = [
    ['choice 1a', 'choice 1b', 'choice 1c', 'choice 1d'],
    ['choice 2a', 'choice 2b', 'choice 2c', 'choice 2d'],
    ['choice 3a', 'choice 3b', 'choice 3c', 'choice 3d'],
    ['choice 4a', 'choice 4b', 'choice 4c', 'choice 4d'],
    ['choice 5a', 'choice 5b', 'choice 5c', 'choice 5d']
];
const solutionKey = [
    [0,1,2,3,0],
    [0,1,2,3,0],
    [0,1,2,3,0],
    [0,1,2,3,0],
    [0,1,2,3,0],
];

///////////////////////////////
// event handling
///////////////////////////////

$( () => {

    $('.category-answer').on('click', (event) => {
        console.log('box clicked');
        console.log($(event.currentTarget).attr('id'));
        // identify which answer is chosen, call function that returns answer object
    })

});