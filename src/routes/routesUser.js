const express = require("express");
const userScheme = require("../models/userScheme.js");

const router = express.Router();
//Get all
router.get("/", async (req, res) => {
        try {
                const data = await userScheme.find();
                const response = await res.send(data);
                return response;
        } catch {
                (err) => console.log(err);
        }
});

//Get for Name
router.get("/:id", async (req, res) => {
        try {
                const { id } = req.params;
                const data = await userScheme.find({ name: id });
                const response = await res.send(data);
                return response;
        } catch {
                (err) => console.log(err);
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

module.exports = router;
