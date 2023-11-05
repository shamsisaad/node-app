const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");

const productsRoutes = require("./routes/products");


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(process.cwd(), "public")))

app.set("view engine", "ejs");
app.set("views", "views");

app.use((req, res, next) => {
    console.log(req.url);;
    next();
});

app.use("/product", productsRoutes);

app.use("/", (req, res) => {
    res.render("home", {user: "Shamsi"});
});

app.listen(3000)