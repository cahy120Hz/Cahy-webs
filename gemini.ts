const GEMINI_API_KEY = "YOUR_GEMINI_API_KEY";
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";

export async function* streamGeminiResponse(message: string) {
  try {
    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{
          parts: [{ text: `You are CAHY AI, a futuristic education assistant. Be helpful, concise, and use technical language when appropriate. User: ${message}` }]
        }],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 2048,
        },
      }),
    });

    if (!response.ok) {
      yield "API key not configured. Please add your Gemini API key to use the AI chat feature.";
      return;
    }

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "No response received.";
    yield text;
  } catch {
    yield "AI Assistant is currently offline. Please configure your Gemini API key in settings.";
  }
}

export async function sendGeminiMessage(message: string): Promise<string> {
  try {
    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{
          parts: [{ text: `You are CAHY AI, a futuristic education assistant. Be helpful, concise, and use technical language when appropriate. User: ${message}` }]
        }],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 2048,
        },
      }),
    });

    if (!response.ok) {
      return "API key not configured. Please add your Gemini API key to use the AI chat feature.";
    }

    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || "No response received.";
  } catch {
    return "AI Assistant is currently offline. Please configure your Gemini API key in settings.";
  }
}
