import express from 'express';
import{
  getWord
} from '../controllers/wordBankController.js'

const router = express.Router();


router.get("/",getWord);

export default router;