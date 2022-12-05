const express = require('express');
const controller = require('../controller/cabController');

const router = express.Router();

router.get('/cab', controller.index);
router.get('/cab/add', controller.create);
router.post('/cab/add', controller.createPost);
router.get('/cab/delete/:id', controller.delete);
router.get('/cabview', controller.cabview);
router.get('/cab/details/:id', controller.details);

module.exports = router;