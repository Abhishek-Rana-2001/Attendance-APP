const express = require('express')
const router = express.Router();
const { getAttendance, setAttendance, updateAttendance, deleteAttendance } = require('../controllers/attendanceController')


router.get('/', getAttendance)

router.post('/', setAttendance)

router.put('/:id', updateAttendance)

router.delete('/:id', deleteAttendance)

module.exports = router;