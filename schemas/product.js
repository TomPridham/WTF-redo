"use strict";

const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const product = new Schema({
    "pictures":{
        type:[[String]],
        required:true
    },
    "desc":{
        type:String,
        required:true
    },
    "name":{
        type:String,
        required:true
    },
    "model":{
        type:String,
        required:true
    },
    "astm":{
        type:String,
        required:true
    },
    "material":{
        type:String
    },
    "tech":{
        type:String
    }
});

module.exports = Mongoose.model("products", product);