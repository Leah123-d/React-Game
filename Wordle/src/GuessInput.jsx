import React, { useState } from "react";
import WordBank from "./WordBank.jsx";

const GuessInput = () => {
    //intilize state using useState hook
    const [guess, setGuess] = useState("");
    const [message,setMessage] = useState("");


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
        return alert(`you entered ${guess}`)

//add logic to check against the correct word 
    };
//render the form 
    return (
        <>
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
        </>
    );

}
export default GuessInput

//how can I set a secret word? 
