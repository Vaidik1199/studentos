import mongoose from "mongoose";

const studyPlanSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    examDate: {
      type: Date,
      required: true,
    },

    studyHours: {
      type: Number,
      required: true,
    },

    subjects: {
      type: String,
      required: true,
    },

    weakSubjects: {
      type: String,
      default: "",
    },

    plan: {
      type: String,
      required: true,
    },

    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("StudyPlan", studyPlanSchema);