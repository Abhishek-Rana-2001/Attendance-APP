const mongoose = require('mongoose')


const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb://localhost:27017/Attendance-App", {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        })
        console.log((`MongoDB Connected : ${conn.connection.host}`.cyan.underline));
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;