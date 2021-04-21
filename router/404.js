const express = require('express');
const router = express.Router();

const errorController = require('../controller/error')
router.use(errorController.error)

module.exports = router;