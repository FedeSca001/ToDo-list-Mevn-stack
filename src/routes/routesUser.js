const express = require("express");
const userScheme = require("../models/userScheme.js");

const router = express.Router();
//Get all
/*router.get("/", async (req, res) => {
        try {
                const data = await userScheme.find();
                const response = await res.send(data);
                return response;
        } catch {
                (err) => console.log(err);
        }
});*/

//Get for Name
router.get("/:id/:pass", async (req, res) => {
        try {
                const { id, pass } = req.params;
                if (id && pass) {
                        const data = await userScheme.find({ name: id, password: pass });
                        const response = await res.send(data);
                        return response;
                } else{
                        res.send('none')
                }
        } catch {
                (err) => res.send(err);
        }
});

//User new
router.post("/newUser", async (req, res) => {
        const { name, lastName, password } = req.body;
        const data = {
                name: name,
                lastName: lastName,
                password: password
        };
        try {
                const dataSave = await userScheme(data).save();
                const response = await res.send(dataSave);
                console.log(data.name);
                return response;
        } catch {
                (err) => console.log(err);
        }
});

//Update for ID
router.put("/update/:id", async (req, res) => {
        try {
                const { id } = req.params;
                const {name,lastName,password} = req.body;
                const update = await userScheme.updateOne(
                        { _id: id },
                        { $set: { name, lastName, password } }
                );
                const response = await res.send(update);
                return response;
        } catch {
                (err) => console.log(err);
        }
});

//Delete all
router.delete('/delete', async(req,res)=>{
    try{
        const data = await userScheme.remove();
        const resp = await res.send(data);
        return resp;
    }catch{
        err=>console.log(err);
    }
})
//Delette for NAME
router.delete('/delete/:id', async (req, res)=>{
        try {
                const { id } = req.params;
                const data = await userScheme.remove({name: id});
                const resp = await res.send(data);
                return resp;

        } catch (error) {
                console.log(error);
        }
})
module.exports = router;
