import express from 'express';
import{
  getPlayer,
  getPlayers,
  createPlayer,
  updatePlayer,
  deletePlayer,
  searchPlayer,
} from '../controllers/contactsConroller.js';

const router = express.Router();

router.get("/search/:player_name",searchPlayer)
router.get("/:player_id",getPlayer);
router.get("/",getPlayers);
router.post("/",createPlayer);
router.put("/:player_id",updatePlayer);
router.delete("/:player_id",deletePlayer);

export default router;