//TO-DO 
//Test this component to see if it's returning the information you need

import { useState, useEffect } from 'react'

function Scoreboard({deletePlayer}) {
  const [scoreboard, setScoreboard] = useState([]);

  const fetchScoreboard = async () => { 
    try {
      const res = await fetch("/players/scoreboard");
      if(!res.ok) throw new Error("Failed to fetch scoreboard");
      const data = await res.json();
      console.log("Fetched scoreboard: ", data)
      return setScoreboard(data);
    } catch(error) {
      console.error("Error fetching scoreboard: ", error);
      //setErrorHandle(true); 
    }
  };
  useEffect(() => {
    fetchScoreboard();
  }, []);

  return(
    <div className="cardContainer">
       <h1> Scoreboard </h1>
      <div className="content-1">
       
        {fetchScoreboard && (scoreboard.map((score, index) => (
        <div key={index}>
        <p>Player Name: {score.player_name}</p>
        <p>Scores: {score.player_score}</p>
        <button onClick={() =>  deletePlayer(score.player_name)}>delete</button>
        </div>
        ))
      )}
        
      </div>

    </div>

  )

}

export default Scoreboard;

  

