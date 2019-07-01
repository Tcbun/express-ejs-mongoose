const mongoose = require('mongoose')
const Schema = mongoose.Schema
const db = require('../db/index')
const initSchema = new Schema({
    init_id: Number,
    title: String,
    nav: [
        {
            title: String,
            subnav: {
                title:String
            }
        }
    ],
    bannerText: Array
})
module.exports = mongoose.model('init', initSchema)
