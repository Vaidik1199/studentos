import Attendance from "../models/Attendance.js";

export const createAttendance = async (req, res) => {
  try {
    const { subject, attendedClasses, totalClasses } = req.body;

    const attendance = await Attendance.create({
      user: req.user._id,
      subject,
      attendedClasses,
      totalClasses,
    });

    return res.status(201).json({
      success: true,
      message: "Attendance created successfully.",
      data: attendance,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};

export const getAttendance = async (req, res) => {
  try {
    console.log("========== GET ATTENDANCE ==========");
    console.log("Authenticated User ID:", req.user._id);
    console.log("Authenticated Email:", req.user.email);

    const attendance = await Attendance.find({
      user: req.user._id,
    });

    console.log("Attendance Found:", attendance);
    console.log("===================================");

    return res.status(200).json({
      success: true,
      data: attendance,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};

export const updateAttendance = async (req, res) => {
  try {
    const { id } = req.params;

    const attendance = await Attendance.findOne({
      _id: id,
      user: req.user._id,
    });

    if (!attendance) {
      return res.status(404).json({
        success: false,
        message: "Attendance record not found.",
      });
    }

    attendance.subject =
      req.body.subject ?? attendance.subject;

    attendance.attendedClasses =
      req.body.attendedClasses ??
      attendance.attendedClasses;

    attendance.totalClasses =
      req.body.totalClasses ??
      attendance.totalClasses;

    await attendance.save();

    return res.status(200).json({
      success: true,
      message: "Attendance updated successfully.",
      data: attendance,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};

export const deleteAttendance = async (req, res) => {
  try {
    const { id } = req.params;

    const attendance = await Attendance.findOne({
      _id: id,
      user: req.user._id,
    });

    if (!attendance) {
      return res.status(404).json({
        success: false,
        message: "Attendance record not found.",
      });
    }

    await attendance.deleteOne();

    return res.status(200).json({
      success: true,
      message: "Attendance deleted successfully.",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};