const express = require('express');
const controller = require('../controller/bookingController');

const router = express.Router();

router.get('/booking/add/:id', controller.create);
router.post('/booking/add/:id', controller.createPost);
router.get('/cab/bookview/:bid', controller.bookview);
router.get('/cab/payment', controller.payment);
router.get('/cab/payment/success', controller.paymentsuccess);
router.get('/cab/payment/successpdf', controller.pdf);




module.exports = router;