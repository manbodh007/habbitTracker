
// create schema for the given values
const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({
    Habbit:{
        type:String,
        required:true
    },
    Schedule:{
         type:String,
         required:true
    },
    Detail:[{
       Date:{
          type:Date,
          required:true
       },
       Status:{
        type:Boolean,
        required:true
       }
    }]

},{
    timestamps:true,
});

const Habbits = mongoose.model('Habbits',taskSchema);
module.exports = Habbits;