# Welcome to Ladle: A word Guessing Game!

In this game, you guess a word to match with the secret word. This project highlights the skills of React and useState hooks. Especially, returning different messages or feedback on guesses depending on the user's input.

## Installation
Clone the repository
cd into the repository React-Game
run npm install then npm run dev 

## Troubleshooting Issues:
If the game is not displaying in preview, please take the following steps.


Review the App.jsx file to confirm that the imports below are at the top of the page
        import React, { useState } from 'react';
        import GuessInput from './GuessInput.jsx';

In the App.jsx file, review the function App, in the return statement ensure the component <GuessInput /> is listed in the return statement. 

Review the GuessInput.jsx file to make sure the states exist and are present on the elements in the return statement

Review the console to see if there are any additional error listed.

## Software Used
This game was built in Visual Studio Code using React + Vite.

## Gameplay preview: 