const express = require('express');
const controller = require('../controller/bookingController');

const router = express.Router();

router.get('/booking/add/:id', controller.create);
router.post('/booking/add/:id', controller.createPost);

router.get('/cab/bookview/:id', controller.bookview);
router.get('/cab/payment/:id', controller.payment);
router.get('/cab/payment/success/:id', controller.paymentsuccess);
router.get('/cab/payment/successpdf', controller.pdf);




module.exports = router;