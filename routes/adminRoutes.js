const express = require('express');
const controller = require('../controller/adminController');

const router = express.Router();

router.get('/admin/cab', controller.cabindex);
router.get('/admin/user', controller.userindex);
router.get('/admin/booking', controller.bookingindex);
router.post('/admin/booking', controller.bookingindexPost);
router.get('/admin/home', controller.adminhome);
router.get('/admin/routes', controller.place);
router.get('/admin/add/routes', controller.createplace);
router.post('/admin/add/routes', controller.createplacepost);



module.exports = router;