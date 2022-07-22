const express = require("express");
const toDoScheme = require('../models/toDoScheme');

const router = express.Router();
//Get all
router.get('/',async (req,res)=>{
    try{
        const data = await toDoScheme.find();
        const response = await res.send(data);
        return response;
    } catch {
        err=> console.log(err);
    }
})
//Get for Name

router.get('/get/:id', async (req,res)=>{
    try{
        const { id } = req.params
        const data = await toDoScheme.find({title: id});
        const response = await res.send(data);
        return response;
    } catch {
        err=>console.log(err);
    }
})

//Post new
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

//Delete all
router.delete('/delete', async(req,res)=>{
    try{
        const data = await toDoScheme.remove();
        const resp = await res.send(data);
        return resp;
    }catch{
        err=>console.log(err);
    }
})

//Update for ID
router.put("/update/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { title, text, priority, date, status } = req.body;
        const update = await toDoScheme.updateOne(
                { _id: id },
                { $set: {title, text, priority, date, status}}
        );
        const response = await res.send(update);
        return response;
    } catch {
        (err) => console.log(err);
    }
});

module.exports = router;
