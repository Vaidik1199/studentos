import Assignment from "../models/Assignment.js";

// ==========================
// Create Assignment
// ==========================

export const createAssignment = async (req, res) => {
  try {
    const assignment = await Assignment.create({
      ...req.body,
      user: req.user._id,
    });

    return res.status(201).json({
      success: true,
      message: "Assignment created successfully.",
      data: assignment,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};

// ==========================
// Get Assignments
// ==========================

export const getAssignments = async (req, res) => {
  try {
    const assignments = await Assignment.find({
      user: req.user._id,
    }).sort({
      dueDate: 1,
    });

    return res.json({
      success: true,
      data: assignments,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};

// ==========================
// Update Assignment
// ==========================

export const updateAssignment = async (req, res) => {
  try {
    const assignment = await Assignment.findOneAndUpdate(
      {
        _id: req.params.id,
        user: req.user._id,
      },
      req.body,
      {
        new: true,
      }
    );

    if (!assignment) {
      return res.status(404).json({
        success: false,
        message: "Assignment not found.",
      });
    }

    return res.json({
      success: true,
      message: "Assignment updated successfully.",
      data: assignment,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};

// ==========================
// Delete Assignment
// ==========================

export const deleteAssignment = async (req, res) => {
  try {
    const assignment = await Assignment.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!assignment) {
      return res.status(404).json({
        success: false,
        message: "Assignment not found.",
      });
    }

    return res.json({
      success: true,
      message: "Assignment deleted successfully.",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};