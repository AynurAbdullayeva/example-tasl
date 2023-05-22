const express = require('express')
const cors = require('cors')
const bodyParser= require('body-parser')
const crypto = require('crypto')
const dotenv = require('dotenv')
const app = express()
dotenv.config();
app.use(cors())
app.use(bodyParser.json());

const PORT = 7070;
// let curentDate = new Date();


app.get('/api/blogs',(req,res)=>{
    res.send('welcome blogs')
});

const BLOGS=[
    {
        id:1,
        currentDate:"10 Jan 2018",
        name:"Addiction When Gambling Becomes A Problem",
        description:"inappropriate behavior ipsum dolor sit amet, consectetur.",
        like: 15,
        comments: 2
    }
]







app.listen(PORT,()=>{
    console.log(`App listening on PORT ${PORT}`)
})