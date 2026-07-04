import model from "../config/gemini.js";

export const generateResponse = async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({
        success: false,
        message: "Prompt is required.",
      });
    }

    const result = await model.generateContent(prompt);

    const response = result.response.text();

    return res.status(200).json({
      success: true,
      data: response,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to generate AI response.",
    });
  }
};