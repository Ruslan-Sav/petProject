const mongoose =require('mongoose');
const path = require('path')
const Schema = mongoose.Schema;


const CampgroundSchema = new Schema({
    title: String,
    image: String,
    price: Number,
    description: String,
    location: String
});

module.exports = mongoose.model('Campground', CampgroundSchema);

