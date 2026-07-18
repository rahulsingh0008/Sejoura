const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const generateResponse = async (userMessage) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-flash-latest",
      contents: `
You are Sejoura AI, a smart guest support assistant for homestays and eco-tourism.

Rules:
- Give clear and friendly responses.
- Keep answers concise.
- If the user asks about travel, accommodation, nearby attractions, safety, local food, or itinerary planning, provide helpful suggestions.
- If the question is unrelated, politely answer that your expertise is guest support and travel assistance.

Guest Question:
${userMessage}
      `,
    });

    return response.text;
  // } catch (error) {
  //   console.error("Gemini Error:", error);
  //   throw new Error("Failed to generate AI response");
  // }
  } catch (error) {
      console.error("========== GEMINI ERROR ==========");
      console.error(error);
      console.error("=================================");
      throw error;
  }
};

module.exports = {
  generateResponse,
};