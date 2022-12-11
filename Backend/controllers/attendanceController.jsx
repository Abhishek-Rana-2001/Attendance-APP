//@desc    GET Attendance
//@route   GET /api/attendance
//access   private 

const getAttendance = (req, res) => {
    res.status(200).json({ message: 'Get Attendance' })
}

//@desc    SET Attendance
//@route   POST /api/attendance

const setAttendance = (req, res) => {
    res.status(200).json({ message: 'Set Attendance' })
}

//@desc    Update Attendance
//@route   PUT /api/attendance

const updateAttendance = (req, res) => {
    res.status(200).json({ message: `Update Attendance ${req.params.id}` })
}

//@desc    Delete Attendance
//@route   DELETE /api/attendance

const deleteAttendance = (req, res) => {
    res.status(200).json({ message: `Delete Attendance ${req.params.id}` })
}


module.exports = {
    getAttendance,
    setAttendance,
    updateAttendance,
    deleteAttendance,
}