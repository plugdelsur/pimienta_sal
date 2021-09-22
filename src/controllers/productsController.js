const path = require('path');

const productsController = {
    detalleMenu: (req, res) => {
        //res.sendFile(path.join(__dirname, '../views/products/productCart.html'));
        res.render('products/detalleMenu');
    }
}

module.exports = productsController;
