console.log("hello world");

// load data
// connect html element to data object
// game logic

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
];
console.log(categoryArray[0]);
console.log(dollarValueArray[1]);
console.log(categoryAnswerArray[5][3]);
console.log(solutionKey[1][3]);

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