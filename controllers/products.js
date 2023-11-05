exports.getAddProduct = (req, res) => {
    res.sendFile("form");
};



exports.postAddProduct = (req, res) => {
    res.send(req.body);
};

