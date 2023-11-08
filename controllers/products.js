const Product = require("../model/product");
exports.getAddProduct = (req, res) => {
    res.sendFile("form", {title: "Add Product Form"});
};







exports.postAddProduct = (req, res) => {
    products.push(req.body);
    res.send("saved");
};

exports.fetchAll = (req, res) => {
    res.render("products", {products});
};

