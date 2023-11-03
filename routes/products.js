const express = require("express");
const path = require("path");

const router = express.Router();

router.post("/form", );

router.get("/form", (req, res, next) => {
    res.sendFile(path.join(process.cwd(), "views", "form.html"));
});


module.exports = router;