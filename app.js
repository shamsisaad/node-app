const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");

const form = require("./routes/form")

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(process.cwd(), "public")))

app.set("view engine", "ejs");
app.set("views", "views");

app.use((req, res, next) => {
    req.data = "shamsi";
    next();
});

app.use("/form", form);

app.listen(3000)