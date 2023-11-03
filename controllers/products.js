exports.getAddProduct = (req, res) => {
    res.sendFile(path.join(process.cwd(), "views", "form.html"));
};



exports.postAddProduct = (req, res) => {
    res.send(req.body);
};

