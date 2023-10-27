const express = require("express");
const app = express();

const form = require("./routes/form")

app.use((req, res, next) => {
    console.log(req.url);
    next();
});

app.use("/form", form);

app.listen(3000)