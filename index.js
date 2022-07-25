const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();


const app = express();
const port = process.env.PORT || 5050;

//Middleware
app.use(express.json());
app.use(morgan("dev")),
app.use(cors());

//Routes
app.use("/todo", require("./src/routes/routesToDo"));
app.use('/user', require("./src/routes/routesUser"));


//Mongo DB
const conectDB = async ()=>{
    try{
        const data = await mongoose.connect(process.env.MONGODB_URI);
        return {data};
    } catch {
        err => console.log('no hay DB')
    }
}

//INIT
app.listen(
    port, async ()=> {
        await conectDB();
}
);
