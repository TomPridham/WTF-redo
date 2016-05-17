"use strict";

const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const section = new Schema({
    
});
const article = new Schema({
    "entry":[{
        type:String,
        required: true,
        unique: true
    }]
});

module.exports = Mongoose.model("articles", article);