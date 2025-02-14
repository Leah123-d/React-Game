import React, { useState } from 'react';
import GuessInput from './GuessInput.jsx';
import WordBank from "./WordBank.jsx";

function App() {

  const [targetWord,setTargetWord] = useState("");

  const handleClick = () => {
            //random word generator 
            //Math random method is used to select a random index of a word from the WordBank component
    let randomIndex = Math.floor(Math.random() * WordBank.length); //this will return a random index
    let secretWord = WordBank[randomIndex]; //we are assigning the index to the WordBank to select a random word

    setTargetWord(secretWord); //we are assigning the secret word to setTargetWord state
    console.log("New secret word:", secretWord);
    }

          

  return (
    <>
    <GuessInput targetWord={targetWord} handleClick={handleClick} />

    </>
    )
  }
  

export default App



