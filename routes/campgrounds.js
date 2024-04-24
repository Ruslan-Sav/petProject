const express = require('express');
const router = express.Router();
const campgrounds = require('../controllers/campgrounds.js');
const catchAsync = require('../utils/CatchAsync.js');
const {isLoggedIn, isAuthor, validateCampground} = require('../middleware.js');

const Campground =require('../models/campground.js');
const path = require('path');

router.route('/')
    .get(catchAsync(campgrounds.index))
    .post(isLoggedIn, validateCampground ,catchAsync(campgrounds.createCampground));

router.get('/new', isLoggedIn, campgrounds.renderNewForm)

router.route('/:id')
    .get(catchAsync(campgrounds.showCampground))
    .put(isLoggedIn, isAuthor, validateCampground ,catchAsync(campgrounds.updateCampground))
    .delete(isLoggedIn, isAuthor, catchAsync(campgrounds.deleteCampground));

router.get('/:id/edit', isLoggedIn, isAuthor, catchAsync(campgrounds.renderEditForm))

module.exports = router;