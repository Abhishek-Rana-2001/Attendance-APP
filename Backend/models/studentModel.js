const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
   text: {
      type: String,
      required: [true, "Please Add text"]
   }
   /* name: {
      type: String,
      required: [true, 'Please enter your name'],
   },
   program: {
      type: String,
      required: true,
   },
   semester: {
      type: Number,
      required: true,
   },
   regNo: {
      type: Number,
      required: true,
   },
   subjects: {
      type: Array,
      required: true,
   }, */
},
   {
      timestamps: true,
   }
);


module.exports = mongoose.model("Student", studentSchema);