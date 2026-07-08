import Attendance from "../models/Attendance.js";

export const createAttendance = async (req, res) => {
  try {
    const { subject, attendedClasses, totalClasses } = req.body;

    if (Number(attendedClasses) > Number(totalClasses)) {
      return res.status(400).json({
        success: false,
        message: "Attended classes cannot exceed total classes.",
      });
    }

    const subjects = await Attendance.find({
      user: req.user._id,
    });

    const duplicate = subjects.find(
      (item) =>
        item.subject.trim().toLowerCase() === subject.trim().toLowerCase(),
    );

    if (duplicate) {
      return res.status(400).json({
        success: false,
        message: "Subject already exists.",
      });
    }

    const attendance = await Attendance.create({
      user: req.user._id,
      subject: subject.trim(),
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
    const attendance = await Attendance.find({
      user: req.user._id,
    });

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

    const subjects = await Attendance.find({
      user: req.user._id,
      _id: { $ne: id },
    });

    const duplicate = subjects.find(
      (item) =>
        item.subject.trim().toLowerCase() ===
        req.body.subject.trim().toLowerCase(),
    );

    if (duplicate) {
      return res.status(400).json({
        success: false,
        message: "Subject already exists.",
      });
    }

    if (Number(req.body.attendedClasses) > Number(req.body.totalClasses)) {
      return res.status(400).json({
        success: false,
        message: "Attended classes cannot exceed total classes.",
      });
    }
    attendance.attendedClasses = req.body.attendedClasses;
    attendance.totalClasses = req.body.totalClasses;

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
