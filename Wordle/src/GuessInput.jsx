import React, { useState } from "react";
import WordBank from "./WordBank.jsx";

const GuessInput = () => {
    //intilize state using useState hook
    const [guess, setGuess] = useState("");
    const [message,setMessage] = useState("");
    const [targetWord,setTargetWord] = useState("");
    const [prevGuesses, setPrevGuesses] = useState([]);


    //random word generator 
    //math random, bc we will choose a word based on the index 
    const handleClick = () => {
        let randomIndex = Math.floor(Math.random() * WordBank.length); //this will return a random index
        let secretWord = WordBank[randomIndex]; //we are assigning the index to the WordBank to select a random word

        setTargetWord(secretWord); //we are assigning the secret word to setTargetWord state

        console.log("New secret word:", secretWord);
    }


    //handle form input changes
    const handleChange = (e) => {
        setGuess(e.target.value.toUpperCase()); //convert to uppercase
    };
    
    //handle form submission 
    const handleSubmit = (e) => {
        e.preventDefault();

        if(guess.length !== 5){
            alert("Please enter a 5-letter word.")
            return
        }
        
        guess === targetWord ? setMessage("word match not found!") : setMessage("try again!");

        //list of previous guesses 
        setPrevGuesses ((prevGuesses) => [...prevGuesses, guess]);
        setGuess("");
    };




//render the form 
    return (
        <>
            <button onClick={handleClick}>Generate a Word </button>
            <p>Your Word is: {targetWord ? "Hidden 🤫" : "Click button to start!"} </p>
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="guess">Enter your Guess:</label>
            <input 
                type="text"
                name="guess"
                maxLength={5}
                value={guess}
                onChange={handleChange}
                placeholder="please enter a 5-letter word"
            />
            </div>
            <button type="submit"> Enter </button>         
        </form>

        <p>{message}</p>

        {/* displays previous guess */}
        <h3> Previous Guesses:</h3>
        <ul>
            {prevGuesses.map((word,index) => (
                <li key={index}>{word}</li>
            ))}
        </ul>

        </>
    );

}
export default GuessInput;


