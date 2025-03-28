import express from 'express';
import{
  getPlayer,
  getPlayers,
  createPlayer,
  updatePlayer,
  deletePlayer,
  searchPlayer,
  getScoreboard,
} from '../controllers/playerController.js'

const router = express.Router();

router.get("/scoreboard", getScoreboard);
router.get("/search/:player_name",searchPlayer);
router.get("/:player_id",getPlayer);
router.get("/",getPlayers);
router.post("/",createPlayer);
router.put("/:player_id",updatePlayer);
router.delete("/:player_id",deletePlayer);



//create routes here to create joins to display player's last 
//create a route to display the score board, scoreboard route 

export default router;