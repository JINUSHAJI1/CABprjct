const express = require('express');
const controller = require('../controller/bookingController');

const router = express.Router();

router.get('/booking/add/:id', controller.create);
router.post('/booking/add', controller.createPost);



module.exports = router;