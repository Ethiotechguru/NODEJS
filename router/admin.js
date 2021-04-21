const express = require('express');
const router = express.Router();
const AdminController = require('../controller/admin')


router.get('/add-product', AdminController.getAdminController)
router.get('/admin', AdminController.adminProducts)
router.post('/add-product', AdminController.postAdminController)
router.get('/edit-product/:productId', AdminController.getEditProduct)
router.post('/edit-product', AdminController.postEditProduct)
router.post("/admin", AdminController.postDeleteProduct)

module.exports = router;