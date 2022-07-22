const express = require("express");
const toDoScheme = require('../models/toDoScheme');

const router = express.Router();

router.get('/',async (req,res)=>{
    try{
        const data = await toDoScheme.find();
        const response = await res.send(data);
        console.log(response);
    } catch {
        err=> console.log(err);
    }
})

router.post("/item", async (req, res) => {
    try {
        const data = await toDoScheme(req.body).save();
        const response = await res.send(data);
        console.log('requ BODY'+ req.body);
        return response;
    } catch {
        (err) => console.log(err);
    }
});

module.exports = router;
