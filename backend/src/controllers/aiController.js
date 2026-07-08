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

    const finalPrompt = `
You are StudentOS AI, a professional academic assistant for college students.

Your goal is to give clean, professional and easy-to-read responses.

IMPORTANT RULES:

1. Use proper Markdown formatting.
2. Start with a short introduction when appropriate.
3. Use headings (##).
4. Use bullet points whenever possible.
5. Use numbered lists for steps.
6. NEVER create markdown tables unless the user explicitly asks for a table.
7. Keep paragraphs short (2–4 lines).
8. Highlight important words using **bold**.
9. If explaining code:
   - Use proper code blocks.
   - Explain the code after the code block.
10. If giving notes:
    - Use headings.
    - Use bullet points.
    - Finish with a short summary.
11. If giving interview questions:
    - Number every question.
12. If giving exam preparation:
    - Make the response simple, structured and easy to revise.
13. Avoid unnecessary long introductions.
14. Do not use HTML.
15. Always optimize the response for reading inside a web application.
16. Leave one blank line between headings, paragraphs, bullet lists and sections.
17. Avoid long continuous paragraphs.
18. Keep each paragraph under 3 lines whenever possible.

Student Question:

${prompt}
`;

    const chat = model.startChat({
      history: req.body.history || [],
    });

    const result = await chat.sendMessage(finalPrompt);

    const response = result.response.text();

    return res.status(200).json({
      success: true,
      data: response,
    });
  } catch (error) {
    console.error(error);

    // Gemini quota exceeded
    if (
      error.status === 429 ||
      error.message?.includes("429") ||
      error.message?.includes("quota") ||
      error.message?.includes("Too Many Requests")
    ) {
      return res.status(429).json({
        success: false,
        message:
          "⚠️ Daily AI request limit reached. Please try again tomorrow or use another Account.",
      });
    }

    // Invalid API Key
    if (
      error.message?.includes("API_KEY") ||
      error.message?.includes("API key")
    ) {
      return res.status(401).json({
        success: false,
        message: "⚠️ Server Down.",
      });
    }

    // Network Error
    if (
      error.message?.includes("fetch") ||
      error.message?.includes("network")
    ) {
      return res.status(503).json({
        success: false,
        message:
          "⚠️ Unable to connect to Gemini AI. Please try again later.",
      });
    }

    // Default Error
    return res.status(500).json({
      success: false,
      message: "⚠️ Failed to generate AI response.",
    });
  }
};

export const generateStudyPlan = async (req, res) => {
  try {
    const {
      examDate,
      studyHours,
      subjects,
      weakSubjects,
    } = req.body;

    if (!examDate || !studyHours || !subjects) {
      return res.status(400).json({
        success: false,
        message: "Exam date, study hours and subjects are required.",
      });
    }

    const prompt = `
You are StudentOS AI, an expert academic mentor.

Create a personalized study plan.

Exam Date:
${examDate}

Study Hours Per Day:
${studyHours}

Subjects:
${subjects}

Weak Subjects:
${weakSubjects || "None"}

Instructions:

- Divide the plan day-by-day.
- Allocate extra time for weak subjects.
- Include revision sessions.
- Keep one full revision day before the exam.
- Add one mock test before the exam.
- Keep each day's workload realistic.
- Return the answer in clean Markdown.

Example:

## Day 1
- DBMS Unit 1
- CN Unit 1
- 30 min Revision

## Day 2
- AI Unit 1
- WT Unit 1
- Practice Questions

Continue until the exam date.
`;

    const result = await model.generateContent(prompt);

    const response = result.response.text();

    return res.status(200).json({
      success: true,
      data: response,
    });
  } catch (error) {
    console.error(error);

    if (
      error.status === 429 ||
      error.message?.includes("429") ||
      error.message?.includes("quota")
    ) {
      return res.status(429).json({
        success: false,
        message: "Daily AI limit reached.",
      });
    }

    return res.status(500).json({
      success: false,
      message: "Failed to generate study plan.",
    });
  }
};