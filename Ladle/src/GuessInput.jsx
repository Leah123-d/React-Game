import React, { useState } from "react";
import "./GuessInput.css";

const GuessInput = ({ targetWord, handleClick, handleReset }) => {
    //intilizing state using useState hook
    const [guess, setGuess] = useState("");
    const [guessCount, setGuessCount] = useState(0);
    const [message,setMessage] = useState("");
    const [prevGuesses, setPrevGuesses] = useState([]);
    const [revealedLetters, setRevealedLetters] = useState([])

    const resetGame = () => {
        setGuess("");
        setGuessCount(0);
        setMessage("");
        setPrevGuesses([]);
        setRevealedLetters([]);
        handleReset();
    };

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
        const targetArray = targetWord.split("");

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
        
        setGuessCount((prev) => prev +1);
        
        guess === targetWord ? setMessage(`🥳 Correct! You completed this in ${guessCount + 1} guesses`) : setMessage(`Try again! You're on guess ${guessCount + 1}`);

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

        <p>Your Word is: {targetWord ? "Hidden 🤫" : "Click button to start!"} </p>
        <div>
            <button onClick={handleClick}>Generate a Word</button>
            <div id="restart" onClick={resetGame}>↺</div>
        </div>
        
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
                    disabled={!targetWord}
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

