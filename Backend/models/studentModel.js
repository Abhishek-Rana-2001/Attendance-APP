const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
     name:{
        type:String,
        required:true,
     },
     program:{
        type:String,
        required:true,
     },
     semester:{
        type:Number,
        required:true,
     },
     regNo:{
        type:Number,
        required:true,
     },
     subjects:{
      type:Array,
      required:true,
     }
    
});


module.exports = mongoose.Model("Student",studentSchema);