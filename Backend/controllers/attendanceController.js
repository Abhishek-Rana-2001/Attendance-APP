const asyncHandler = require('express-async-handler')


const Student = require('../models/studentModel')
//@desc    GET Attendance
//@route   GET /api/attendance
//access   private 

const getAttendance = asyncHandler(async (req, res) => {
    const students = await Student.find()
    res.status(200).json(students)

})

//@desc    SET Attendance
//@route   POST /api/attendance

const setAttendance = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error("Please add Attendance")
    }

    const student = await Student.create({
        text: req.body.text,
    })
    res.status(200).json(student)
})

//@desc    Update Attendance
//@route   PUT /api/attendance

const updateAttendance = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update Attendance ${req.params.id}` })
})

//@desc    Delete  Attendance
//@route   DELETE /api/attendance

const deleteAttendance = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete Attendance ${req.params.id}` })
})


module.exports = {
    getAttendance,
    setAttendance,
    updateAttendance,
    deleteAttendance,
}