const express = require("express");
const app = express();



app.use((req, res, next) => {
    console.log(req.url);
    next();
});

app.use((req, res, next) => {
    res.send(req.url);
});

app.listen(3000)