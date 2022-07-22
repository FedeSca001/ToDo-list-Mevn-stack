const express = require('express');

const app = express();
const port = process.env.PORT || 5050;

//Middleware
app.use(express.json());
app.use(morgan("dev")), app.use(cors());

//INIT
app.listen(port, async ()=> {
    await conectDB();
    console.log('logued',port);
});