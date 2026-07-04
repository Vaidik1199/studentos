import Attendance from "../models/Attendance.js";
import Assignment from "../models/Assignment.js";
import Note from "../models/Note.js";

export const getAnalytics = async (req, res) => {
  try {
    // Attendance
    const attendance = await Attendance.find({
      user: req.user._id,
    });

    const attendedClasses = attendance.reduce(
      (sum, item) => sum + item.attendedClasses,
      0
    );

    const totalClasses = attendance.reduce(
      (sum, item) => sum + item.totalClasses,
      0
    );

    const averageAttendance =
      totalClasses === 0
        ? 0
        : Number(
            (
              (attendedClasses / totalClasses) *
              100
            ).toFixed(1)
          );

    // Assignments
    const assignments = await Assignment.find({
      user: req.user._id,
    });

    const completedAssignments = assignments.filter(
      (item) => item.status === "Completed"
    ).length;

    const pendingAssignments = assignments.filter(
      (item) => item.status === "Pending"
    ).length;

    // Notes
    const notes = await Note.find({
      user: req.user._id,
    });

    return res.json({
      success: true,
      data: {
        attendance: {
          averageAttendance,
          attendedClasses,
          totalClasses,
          subjects: attendance.length,
        },

        assignments: {
          total: assignments.length,
          completed: completedAssignments,
          pending: pendingAssignments,
        },

        notes: {
          total: notes.length,
        },
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