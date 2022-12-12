const express = require('express')
const router = express.Router();
const { getAttendance, setAttendance, updateAttendance, deleteAttendance } = require('../controllers/attendanceController')

router.route('/').get(getAttendance).post(setAttendance)
router.route('/:id').put(updateAttendance).delete(deleteAttendance)

module.exports = router;