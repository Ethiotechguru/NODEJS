const express = require('express');
const router = express.Router();
const shopController = require('../controller/shop')

// const ejs = require('ejs')
// router.get('/', (req, res)=>{
//     res.sendFile(path.join(__dirname, '../', 'views',  'shop.html'))
// })

router.get('/', shopController.shopProduct)
// router.get('/cart', shopController.getCart)
// router.post('/cart', shopController.postCart)
router.get('/product-list', shopController.productList)
router.get('/product-list/:productId', shopController.getDetail)

module.exports = router;