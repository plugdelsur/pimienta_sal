const path = require('path');

const mainController = {
    index: (req, res) => {
        //res.sendFile(path.join(__dirname, '../views/products/productCart.html'));
        res.render('main/index');
    }
}
module.exports = mainController;