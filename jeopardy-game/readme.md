# Jeopardy Game

Link to deployed app --> [Jeopardy by LB](https://laurabusta.github.io/jeopardy-game/index.html)

## Overview

[Game Screenshot](https://i.imgur.com/7c1s2EO.png)

For Project #1, in General Assembly's Software Engineering Immersive Bootcamp Program, I created a Jeopardy game as an exercise in styling HTML with CSS, using flexbox properties and manipulating the DOM with Javascript and JQuery. I specifically chose this project option to gain more experience in these areas that I did not have previous experience with. 

I intend to use this as an educational tool with other projects I am currently working on with the LPGA Amateur Golf Association and city public school teachers. 

## How To Play
* start of game, player will select the dollar value in one of the six categories
* when clicked, the player is shown the jeopardy "answer" for that dollar value and given 4 choices to match the "question" that best matches the jeopardy "answer".
* player is only given one chance to select a question, so choose wisely!
* after selecting a question, the player is shown the correct solution to the jeopardy answer. player will press the close button to continue.
* player wins the game if they reach a positive score after completing all of the dollar values on the board.
* player loses the game if they have a negative score and cannot reach a positive score with the remaining dollar values left on the board

## Technologies Used
* HTML, CSS, Javascript, JQuery

## Flow Diagram
(add link to flow diagram here)

## Coding Notes
* javascript code is organized in sections for class declarations, data arrays, global objects for organization of UI, event handling and game methods, and initial/"start state" executable code
* starting game board design is hard coded into HTML
* all modals are added to DOM from javascript code utilizing JQuery library

## Future Development
* may change the variable naming convention because flipping "question" and "answer" to match jeopardy jargon can be confusing...
* add start modal to get player name
* add method to load category headers into UI from data array
* create a top level modal method for consistent styling of all methods
* make responsive styling for mobile use (iPhone/tablet)
* update design with image background to match future themes (golf, history class, etc)
* create themed versions for educational purposes (golf rules, middle school students)
* create end game form to send results to email address or take snapshot of results
* create functionality for admin to upload custom themes and questions
* add multi-player option; head-to-head gameplay
* game save option

## Revision Tracker
* 2012.02.12 - prototype for proof of concept


