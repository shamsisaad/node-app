const express = require("express");
const path = require("path");

const router = express.Router();

router.post("/", (req, res, next) => {
    res.send(req.body);
});

router.get("/", (req, res, next) => {
    res.sendFile(path.join(process.cwd(), "views", "form.html"));
});

// router.post("/submit", (req, res) => {
    // res.send(req.body);
// });

module.exports = router;