const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5050;

//Middleware
app.use(express.json());
app.use(morgan("dev")), app.use(cors());

//INIT
app.listen(port, console.log('logued')/*async ()=> {
    await conectDB();
    console.log('logued',port);
}*/);