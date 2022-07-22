const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const routeToDo = require('./src/routes/toDo')
require("dotenv").config();


const app = express();
const port = process.env.PORT || 5050;

//Middleware
app.use(express.json());
app.use(morgan("dev")), app.use(cors());

//Routes
app.get('/todo',()=>{console.log("quetpasa");});


//Mongo DB
const conectDB = async ()=>{
    try{
        const data = await mongoose.connect(process.env.MONGODB_URI);
        console.log("conectado a base de datos ");
        return {data};
    } catch {
        err => console.log('no hay DB')
    }
}

//INIT
app.listen(
        port, async ()=> {
            await conectDB();
            console.log('logued',port);
}
);
