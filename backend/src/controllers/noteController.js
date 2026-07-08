import Note from "../models/Note.js";

// ============================
// Create Note
// ============================

export const createNote = async (req, res) => {
  try {
    const title = req.body.title.trim();
    const content = req.body.content.trim();

    if (!title || !content) {
      return res.status(400).json({
        success: false,
        message: "Title and content are required.",
      });
    }

    const note = await Note.create({
      user: req.user._id,
      title,
      content,
    });

    return res.status(201).json({
      success: true,
      message: "Note created successfully.",
      data: note,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};

// ============================
// Get Notes
// ============================

export const getNotes = async (req, res) => {
  try {
    const notes = await Note.find({
      user: req.user._id,
    }).sort({
      pinned: -1,
      updatedAt: -1,
    });

    return res.json({
      success: true,
      data: notes,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};

// ============================
// Update Note
// ============================

export const updateNote = async (req, res) => {
  try {
    const note = await Note.findOneAndUpdate(
      {
        _id: req.params.id,
        user: req.user._id,
      },
      req.body,
      {
        new: true,
      },
    );

    if (!note) {
      return res.status(404).json({
        success: false,
        message: "Note not found.",
      });
    }

    return res.json({
      success: true,
      message: "Note updated successfully.",
      data: note,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};

// ============================
// Delete Note
// ============================

export const deleteNote = async (req, res) => {
  try {
    const note = await Note.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!note) {
      return res.status(404).json({
        success: false,
        message: "Note not found.",
      });
    }

    return res.json({
      success: true,
      message: "Note deleted successfully.",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};

export const saveAINote = async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!content?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Content is required.",
      });
    }

    const note = await Note.create({
      user: req.user._id,
      title: title || `AI Note - ${new Date().toLocaleDateString()}`,
      content,
      pinned: false,
    });

    return res.status(201).json({
      success: true,
      message: "AI note saved successfully.",
      data: note,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to save AI note.",
    });
  }
};
