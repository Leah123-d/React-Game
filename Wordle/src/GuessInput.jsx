import React, { useState } from "react";
import WordBank from "./WordBank.jsx";
import "./GuessInput.css";

const GuessInput = () => {
    //intilize state using useState hook
    const [guess, setGuess] = useState("");
    const [message,setMessage] = useState("");
    const [targetWord,setTargetWord] = useState("");
    const [prevGuesses, setPrevGuesses] = useState([]);
    const [revealedLetters, setRevealedLetters] = useState([])


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

        //converting words to an array to compare each letter an their index

        const guessArray = guess.split("");
        const targetArray = targetWord.split("");

        //count the letters in the target word 
        let letterCount = {};
        targetArray.forEach((char) => {
            letterCount[char] = (letterCount[char] || 0) + 1;
        });

        //this array will store the color feedback
        let feedback = new Array(5).fill("gray");
        
        //first pass, mark correct letter green
        guessArray.forEach((char, i) => {
            if(char === targetArray[i]){
                feedback[i] = "green";
                letterCount[char]--;
            }
        });
        //second pass to mark misplaced letters yellow
        guessArray.forEach((char, i) => {
            if(char !== targetArray[i] && letterCount[char] > 0){
                feedback[i] = "yellow";
                letterCount[char]--;
            }
        });
        
        
        guess === targetWord ? setMessage("🥳 Correct!") : setMessage("Try again!");

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




//render the form 
    return (
        <>
            <p>Your Word is: {targetWord ? "Hidden 🤫" : "Click button to start!"} </p>
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


            {/* displays previous guess */}
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

}
export default GuessInput;

