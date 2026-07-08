import Attendance from "../models/Attendance.js";
import Assignment from "../models/Assignment.js";
import Note from "../models/Note.js";

export const getDashboardStats = async (req, res) => {
  try {
    // Attendance
    const attendance = await Attendance.find({
      user: req.user._id,
    });

    const totalSubjects = attendance.length;

    const attendedClasses = attendance.reduce(
      (sum, item) => sum + item.attendedClasses,
      0,
    );

    const totalClasses = attendance.reduce(
      (sum, item) => sum + item.totalClasses,
      0,
    );

    const averageAttendance =
      totalClasses === 0
        ? 0
        : Number(((attendedClasses / totalClasses) * 100).toFixed(1));

    // Assignments
    const pendingAssignments = await Assignment.countDocuments({
      user: req.user._id,
      status: "Pending",
    });

    const upcomingAssignments = await Assignment.find({
      user: req.user._id,
      status: "Pending",
    })
      .select("title dueDate priority status")
      .sort({ dueDate: 1 })
      .limit(5);

    // Notes
    const recentNotes = await Note.find({
      user: req.user._id,
    })
      .select("title updatedAt pinned")
      .sort({ pinned: -1, updatedAt: -1 })
      .limit(5);

    return res.json({
      success: true,
      data: {
        totalSubjects,
        attendedClasses,
        totalClasses,
        averageAttendance,

        pendingAssignments,

        recentNotes,

        upcomingAssignments,

        attendance,
      },
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
