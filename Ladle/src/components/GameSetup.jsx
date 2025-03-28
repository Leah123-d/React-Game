//To Do: 
  //input for player name to pass throughout game 
  //button to view score 
  //rest button to clear name

import { useState } from 'react'


function GameSetup ({amount,onChange,onSubmit}) {

  const handleSubmit = (e) =>{
    e.preventDefault();
    onSubmit(e);
  }

  //the function to handle dropdown selection
  const handleClick = (name,value) => {
    const event = {
      target: {
        name: name,
        value: value,
      }
    };
    onChange(event); //passing the events to the onChange

    // if(qtype.value === boolean ){
    //   input.lvlHard.disabled = "true";
    // }
  };


  return (
   <>
    
   <div>
    <h1>Setup your Game!</h1>
    <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Player Name</label>
        <input  
              type="text" 
              id="amount"
              name="amount"
              value={amount}
              onChange={onChange}
              required 
              placeholder="Type a number between 1 to 12" 
              min="1" 
              max="12" 
             />
      <button >Create Game</button> 
    </form>
    </div>
   </>

  )
}

export default GameSetup