const mongoose =require('mongoose');
const path = require('path')
const Schema = mongoose.Schema;


const CampgroundSchema = new Schema({
    title: String,
    price: String,
    description: String,
    location: String
});

module.exports = mongoose.model('Campground', CampgroundSchema);