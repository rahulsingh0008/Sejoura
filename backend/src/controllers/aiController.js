const { generateResponse } = require("../services/geminiService");

const chatWithAI = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || message.trim() === "") {
      return res.status(400).json({
        message: "Message is required",
      });
    }

    const reply = await generateResponse(message);

    res.status(200).json({
      success: true,
      response: reply,
    });
  // } catch (error) {
  //   res.status(500).json({
  //     success: false,
  //     message: error.message,
  //   });
  } catch (error) {
      console.error(error);

      res.status(500).json({
          success: false,
          message: error.message,
      });
  }
};

module.exports = {
  chatWithAI,
};