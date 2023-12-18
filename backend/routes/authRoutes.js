const express = require('express');
const authController = require('../controllers/authController');
const authMiddleware = require('../controllers/authMiddleware');

const router = express.Router();

router.post('/login', authController.loginController);
router.post('/register', authController.registerController);
router.post('/enrollAndpay',authMiddleware.requireSignIn,authController.enrollAndPay);


module.exports = router;

