`use strict`;

const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const section = new Schema({
    "pictures":{
        type:String,
        desc:
    }
});
const article = new Schema({
    "sections":[{
        type:Schema.ObjectId, ref:"section"
    }]
});

module.exports = Mongoose.model("articles", article);