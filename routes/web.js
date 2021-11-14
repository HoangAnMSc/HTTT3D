const express = require('express');
const router=express.Router();
const HomeController= require('../controllers/HomeController');

router.get('/',HomeController.index);
router.post('/store',HomeController.store);

module.exports =router;