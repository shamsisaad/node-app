const { fetchAll } = require("../controllers/products");

const products = [];

class Product {
    constructor(title) {
        this.title = title;
    }

save() {
    products.push({title: this.title})
    
}

static fetchAll () {

}
}

const product = new Product("Title");
product.save()