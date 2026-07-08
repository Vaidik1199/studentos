import StudyPlan from "../models/StudyPlan.js";

// =============================
// Save Study Plan
// =============================

export const saveStudyPlan = async (req, res) => {
  try {
    const {
      title,
      examDate,
      studyHours,
      subjects,
      weakSubjects,
      plan,
    } = req.body;

    const studyPlan = await StudyPlan.create({
      user: req.user._id,
      title,
      examDate,
      studyHours,
      subjects,
      weakSubjects,
      plan,
    });

    return res.status(201).json({
      success: true,
      message: "Study plan saved successfully.",
      data: studyPlan,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};

// =============================
// Get All Study Plans
// =============================

export const getStudyPlans = async (req, res) => {
  try {
    const studyPlans = await StudyPlan.find({
      user: req.user._id,
    }).sort({
      createdAt: -1,
    });

    return res.status(200).json({
      success: true,
      data: studyPlans,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};

// =============================
// Delete Study Plan
// =============================

export const deleteStudyPlan = async (req, res) => {
  try {
    const { id } = req.params;

    const studyPlan = await StudyPlan.findOneAndDelete({
      _id: id,
      user: req.user._id,
    });

    if (!studyPlan) {
      return res.status(404).json({
        success: false,
        message: "Study plan not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Study plan deleted successfully.",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};