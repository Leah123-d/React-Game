//TO-DO
  //add a fetch to score board here to pass the data 
  //update the fetch for secret word
  //create routes for my CRUD operations
  //add a conditional render to set gameplay to true to start game 


import React, { useState, useEffect } from 'react';
import GuessInput from './components/GuessInput.jsx';
import GameSetup from './components/GameSetup.jsx';
import Scoreboard from './components/Scoreboard.jsx';

function App() {
  const [player, setPlayer] = useState(null);
  const [allPlayers, setAllPlaters] = useState(null);
  const [targetWord,setTargetWord] = useState("");
  const [newPlayer, setNewPlayer] = useState({player_name:""});
  const [isScoreboardOpen, setIsScoreBoardOpen] = useState(false);
  const [isGameOpen, setIsGameOpen] = useState(false);

  const OpenScoreBoard = (e) => {
    e.preventDefault();
    setIsScoreBoardOpen(true);
  }

  const fetchPlayers = async (id) => { 
    try {
      const url = id ? `/players/${id}` : "/players"; 
      const res = await fetch(url);

      if(!res.ok) throw new Error("Failed to fetch players");

      const data = await res.json();
      console.log("fetched data: ", data)

      if(id){
        setPlayer(data);
        return data;
      }else{
        setAllPlaters(data);
      }
    } catch(error) {
      console.error("Error fetching players: ", error);
      //setErrorHandle(true); //to build out an error component 
      return [];
    }
  };

  const fetchScretWord = async () => {
    try {
      const res = await fetch(`/secretword`);

      if(!res.ok) throw new Error("Failed to fetch word");

      const data = await res.json();
      console.log("fetched data: ", data)

      setTargetWord(data);
    } catch(error) {
      console.error("Error fetching starsign: ", error);
      //setErrorHandle(true); //to build out an error component 
      return [];
    }
  };


  const createNewPlayer = async(newPlayer)=>{
    console.log("player submitted:", newPlayer);
  
    try{
    const response = await fetch("/players", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPlayer),
    });
    if(!response.ok){
      throw new Error(`HTTP error! Status: ${response.status}`);
    } 
    //if I want to send a message to the FE I can do that here
    // if(data.response_code != 0){
    //   console.log("no results found");
      // setErrorHandle(true); //will come back to setting this error handling depending on response from the backend
    //}
    setIsGameOpen(true);
    } catch(error){
      console.error("error fetching data: ", error);
    } 
  };

  const deleteContact = async (id) => {
    console.log("Deleting contact with ID:", id);
      try{
      const url = `/players/${ id }`; 
      const response = await fetch(url, {method: 'DELETE'});
        if(!response.ok){
          throw new Error('something went wrong')
        }
        console.log(`${id} entry successfully deleted!`);
      }
      catch(error) {
        console.log(error);
      }
  };
  
  useEffect(() => {
    fetchPlayers();
  }, []);

  return (
    <>
    <GameSetup 
    newPlayer={newPlayer}
    createNewPlayer={createNewPlayer}
    setNewPlayer={setNewPlayer}
    OpenScoreBoard={OpenScoreBoard}
    setIsScoreBoardOpen={setIsScoreBoardOpen}
    />

    {isScoreboardOpen ?
    <Scoreboard /> : null}

    {isGameOpen ?
    <GuessInput 
    handleClick={fetchScretWord}
    targetWord={targetWord} 
     /> : null }
    {/* these are props that are being sent to the child component */}

    </>
    )
  }
  

export default App



