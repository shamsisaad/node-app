const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/", (req, res) => {
    res.render("form");
});

router.post("/submit", (req, res) => {
    res.send(req.body.data);
});

module.exports = router;