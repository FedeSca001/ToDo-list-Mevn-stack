const express = require("express");
const userSchem = require("../models/toDoScheme");
const router = express.Router();

router.get("/", async (req, res) => {
        try {
                const data = await userSchem.find({});
                const response = await res.send(data);
                return response;
        } catch {
                (err) => console.log(err);
        }
});

module.exports = router;