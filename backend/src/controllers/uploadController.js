import User from "../models/User.js";
import cloudinary from "../config/cloudinary.js";

export const uploadProfilePicture = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Please upload an image.",
      });
    }

    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    // Delete previous image from Cloudinary
    if (user.profilePicture?.publicId) {
      await cloudinary.uploader.destroy(
        user.profilePicture.publicId
      );
    }

    // Save new image
    user.profilePicture = {
      url: req.file.path,
      publicId: req.file.filename,
    };

    await user.save();

    return res.status(200).json({
      success: true,
      message: "Profile picture updated successfully.",
      data: user,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};