const express = require('express');
const app = express();

const mongoose = require('mongoose');
//const cors = require('cors');
require('dotenv').config();
const {Location} = require('./location');

mongoose.connect("mongodb+srv://Jatin:1234qwer@cluster0.i3zyb.mongodb.net/co-ordinates?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log('Database Connection is ready...')
})
.catch((err)=> {
    console.log(err);
})

app.set('view engine', 'ejs');

//Server
app.listen(3000, ()=>{
    console.log('server is running http://localhost:3000');
})

app.get('/', (req, res)=>{
    res.render('KU3dview');
})

app.get('/search', async (req, res)=>{
   
    const result = await Location.find({ $text: { $search: req.query.search } });
    res.render('KU3dview',  {result: result });
})

