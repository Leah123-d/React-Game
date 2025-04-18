/* eslint-disable react/prop-types */
//To Do: 
  //input for player name to pass throughout game 
  //button to view score 
  //rest button to clear name

import React from "react";
import { useState } from 'react'


function GameSetup ({ createNewPlayer, newPlayer, setNewPlayer, handleChange, OpenScoreBoard, setIsScoreBoardOpen, setIsGameOpen }) {


  const handleSubmit = (e) =>{
    e.preventDefault();
    createNewPlayer(newPlayer);
  }

  const handleReset = () =>{
    setIsScoreBoardOpen(false);
  }

  return (
   <>
   <div>
    <h1>Setup your Game!</h1>
    <form onSubmit={handleSubmit}>
        <h2>Enter your name</h2>
        <label htmlFor='newPlayer.name'></label>
        <input  
              type="text" 
              id="newPlayer.name"
              name="newPlayer.name"
              value={newPlayer.name}
              onChange={(e) => setNewPlayer({...newPlayer, player_name: e.target.value})}
              required 
             />
      <button> Create Game </button> 
    </form>
    <button onClick={OpenScoreBoard}> ScoreBoard </button> 
    <button onClick={handleReset}>Reset</button>
    </div>
   </>

  )
}

export default GameSetup