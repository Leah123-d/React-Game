import dbConnection from '../db-connnection.js'

export const getWord = async(req,res) => {
  try{
    const result = await dbConnection.query(`SELECT word FROM wordbank ORDER BY RANDOM() LIMIT 1;`);
    const words = result.rows;
    if(words.length === 0){
      return res.status(404).json({error:"no words found"});
    }
    res.json(words[0]);
  }catch (error){
      console.error('error fetching players data: ', error);
  }
}