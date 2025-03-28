import dbConnection from '../db-connnection.js'

export const searchPlayer = async (req,res) => {
  const { player_name } = req.params;
  try{
  const result = await dbConnection.query(`SELECT * FROM players WHERE player_name ILIKE  $1`, [`%${player_name}%`]);
  if(result.rowCount === 0){
    return res.send( { "error": "player not found" } );
  }
  
  res.json(result.rows);
  }catch (error){
  console.error('no player found', error);
  }
}

export const getPlayer = async(req,res) => {
  try{
    const { player_id } = req.params; 
    const result = await dbConnection.query(`SELECT * FROM players WHERE player_id = $1`, [player_id]);

    if(result.rows.length === 0){
        return res.send({ "error": "player not found" });
    }

    res.json(result.rows);
    }catch (error){
        console.error('No player found', error);
    }
}
export const getPlayers = async(req,res) => {
  try{
    const result = await dbConnection.query(`SELECT * FROM players;`);
      res.json(result.rows);
  }catch (error){
      console.error('error fetching players data: ', error);
  }
}
export const createPlayer = async(req,res) => {
  try{
    const { player_name, player_score } = req.body;
    const result = await dbConnection.query(`INSERT INTO players (player_name, player_score) 
                                              VALUES ($1, $2 ) RETURNING *`,
                                            [player_name, player_score]);
    console.log(result);
    res.json({ message:`new player ${result.rows[0].player_name} was added with ID ${result.rows[0].player_name}`})
    }catch (error) {
        console.error('Error creating new player: ', error);
    }
}
export const updatePlayer = async(req,res) => {
  try{
    const { player_id } = req.params; 
    const { player_score } = req.body; 
    const result = await dbConnection.query(`UPDATE players SET 
                                            player_score = $1 
                                            WHERE player_id = $2 RETURNING *`, [player_score, player_id]);
    res.json(result.rows);
  }catch (error) {
    console.error('Error updating player: ', error);
  }
}

export const deletePlayer = async(req,res) => {
  try{
    const { player_id } = req.params;
    const result = await dbConnection.query(`DELETE FROM players WHERE player_id = $1 RETURNING *`, [player_id]);
    if(result.rowCount === 0){
        return res.send( { "error": "player not found" } );
    }
    res.send(`player id: ${player_id} has been deleted`);
    } catch (error){
        console.error(`Could not locate player with player_id: ${player_id}: `, error);
    }
}


export const getScoreboard = async(req,res) => {
  try{
    const result = await dbConnection.query(`SELECT player_name, player_score FROM players ORDER BY player_score DESC ;`);
      res.json(result.rows);
  }catch (error){
      console.error('error fetching players data: ', error);
  }
}

