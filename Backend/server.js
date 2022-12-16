const express = require('express')
const dotenv = require("dotenv").config();
const colors = require('colors')
const { errorHandler } = require('./middlewares/errorMiddleware')
const cors = require('cors')
const port = 5000
const connectDB = require('./config/db')

connectDB()

const app = express();

app.use('/api/attendance', require('./routes/attendanceRoute'))
app.use(errorHandler)

app.use(cors)
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
