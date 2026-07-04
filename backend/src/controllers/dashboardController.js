import Attendance from "../models/Attendance.js";

export const getDashboardStats = async (req, res) => {
  try {
    const attendance = await Attendance.find({
      user: req.user._id,
    });

    const totalSubjects = attendance.length;

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

    return res.json({
      success: true,
      data: {
        totalSubjects,
        attendedClasses,
        totalClasses,
        averageAttendance,
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