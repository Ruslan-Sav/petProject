const { storeReturnTo } = require('../middleware');
const express = require('express');
const router = express.Router();
const passport = require('passport');
const catchAsync = require('../utils/CatchAsync');
const users = require('../controllers/users');
const User = require('../models/user');
const { register } = require('module');

router.route('/register')
    .get(users.renderRegister)
    .post(catchAsync(users.register));

router.route('/login')
    .get(users.renderLogin)
    .post(storeReturnTo, passport.authenticate('local', {failureFlash: true, failureRedirect: '/login'}), users.login);

router.get('/logout', users.logout); 

module.exports = router;