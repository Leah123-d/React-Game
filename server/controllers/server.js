import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import gameRoute from './routers/contactsRoute.js'

const app = express();
dotenv.config();

app.use(bodyParser.json()) 

//to read the tables
app.use('/ladle', gameRoute); 

app.get('/', (req,res) => res.send("Hello! This is the homepage!")); //test connection to the home page


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`ladle server is listening on PORT ${port}`)
})

