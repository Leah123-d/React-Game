//To Do:
    //figure out why the colorsa are not working 
    //there might be an issue with how the word is structured
    //can pass the player's name here to display on the screen
    //send the game title to the setup page 

/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "../GuessInput.css";

const GuessInput = ( {targetWord, handleClick }) => {

    //intilizing state using useState hook
    const [guess, setGuess] = useState("");
    const [guessCount, setGuessCount] = useState(0);
    const [message,setMessage] = useState("");
    const [prevGuesses, setPrevGuesses] = useState([]);
    const [revealedLetters, setRevealedLetters] = useState([])


    //handle form input changes
    const handleChange = (e) => {
        setGuess(e.target.value.toUpperCase());
    };
    
    //handle game submission 
    const handleSubmit = (e) => {
        e.preventDefault();

        if(guess.length !== 5){
            alert("Please enter a 5-letter word.")
            return
        }

        const guessArray = guess.split("");
        const targetArray = targetWord?.word ? targetWord.word.split("") : [];

        let letterCount = {};
        targetArray.forEach((char) => {
            letterCount[char] = (letterCount[char] || 0) + 1;
        });

        let feedback = new Array(5).fill("gray");
        
        guessArray.forEach((char, i) => {
            if(char === targetArray[i]){
                feedback[i] = "green";
                letterCount[char]--;
            }
        });

        guessArray.forEach((char, i) => {
            if(char !== targetArray[i] && letterCount[char] > 0){
                feedback[i] = "yellow";
                letterCount[char]--;
            }
        });

        const newGuessCount = guessCount + 1;
        setGuessCount(newGuessCount);

        if (guess.toUpperCase() === targetWord.word.toUpperCase()){
            setMessage(`🥳 Correct! You completed this in ${guessCount + 1} guesses`)

        }else{ 
            setMessage(`Try again! You're on guess ${guessCount + 1}`); 
        }

        setRevealedLetters([]);

        guessArray.forEach((char, i ) => {
            setTimeout(() => {
                setRevealedLetters((prev) => [...prev, { char, color: feedback[i]}])
            }, i * 300);
        })

        setTimeout(() => {
            setPrevGuesses((prevGuesses) => [...prevGuesses, { word: guess, feedback}]);
        }, 2000)
       
        setGuess("");
    };

    return (
        <>
        <h1>Ladle: A Word Guessing Game!</h1>

        <p>Your Word is: {targetWord.word ? "Hidden 🤫" : "Click button to start!"} </p>
        <button onClick={handleClick}>Generate a Word </button>
        
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
                    disabled={!targetWord.word}
                    className="input"
                />
                </div>
            <button type="submit"> Enter </button>         
        </form>

        <p>{message}</p>

        {/*Revealing letters one at a time */}
        {revealedLetters.length > 0 && (
            <>
            <h3>Current Guess:</h3>
            <ul style={{display:"flex", gap:"5px"}}>
            {revealedLetters.map((entry, i) => (
                <span key={i} className={`letter-box ${entry.color}`}>
                    {entry.char}    
                </span>
            ))}
        </ul>
        </>
        )}

        <h3> Previous Guesses:</h3>
        <ul>
            {prevGuesses.map((entry, index) => (
                <li key={index} style={{ display:"flex", gap:"5px" }}>
                    {entry.word.split("").map((char, i) => (
                    <span
                        key={`${index} - ${i}`}
                        className={`letter-box ${entry.feedback[i]}`}>
                        {char}
                    </span>
                    ))}
                </li>
                ))}
        </ul>
        </>
    );

} // need to figure out where this bracket goes for formatting.
export default GuessInput;

