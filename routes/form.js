const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send(`
        
    `);
});

router.post("/submit", (req, res) => {
    res.send(req.body);
});

module.exports = router;