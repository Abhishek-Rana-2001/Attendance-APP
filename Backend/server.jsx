const express = require('express')
const dotenv = require("dotenv").config();
const cors = require('cors')
const port = 5000

const app = express();

app.use('/api/attendance', require('./routes/attendanceRoute'))


app.use(cors)
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
