const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

//bodyparser middleware 
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());
const db = require('./config/keys').mongoURI;

mongoose.connect(db, {
    useNewUrlParser: true
})
.then(()=> console.log("MongoDb successfully connected"))
.catch(err => console.log(err));


const port = process.env.PORT || 5000; 

app.listen(port, ()=> console.log(`server up and running on port ${port} !`));
