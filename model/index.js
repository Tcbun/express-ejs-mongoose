const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exampleSchema = new Schema({
    title:String,
    nav:Array,
    bannerText:Array
});