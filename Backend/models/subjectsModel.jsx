const mongoose = require('mongoose')

const subjects = new mongoose.Schema({
     subjects:[Array]
});


module.exports = mongoose.Model("Subjects",subjects);