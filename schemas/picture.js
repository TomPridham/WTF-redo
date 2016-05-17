`use strict`;

const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const picture = new Schema({
    link:{
        type:String,
        required: true
    },
    alt:{
        type:String
    }
});


module.exports = Mongoose.model("pictures", picture);