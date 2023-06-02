//node app.js

require('dotenv').config()
const cors = require('cors')
const express = require('express')              //Import exrepss
const app = express()                           //Init exrpess
const mongoose = require('mongoose') 
const connectToMongo = require('./databaseConnect')           //Import mongoose
const PORT = process.env.PORT || 5001;          //Define port


//app.use(helmet());
app.use(cors());

//middleware
app.use(express.json());  


const recipeRouter = require('./routes/recipeRouter');
app.use('/recipes', cors(), recipeRouter);


//*********************************************************** 
// Base URL

app.get('/', cors(),  function (req, res) 
{
  res.send('Hello Recipe App');
})

//*********************************************************** 

connectToMongo();

//*********************************************************** 
//Listen to server
app.listen(PORT, err => 
    {
        if (err) 
        {
            return console.log('Error', err);
        }
        else
        {
            console.log(`\n***********************************`);
            console.log(`Server listening on port ${PORT}...`);
        }
    });