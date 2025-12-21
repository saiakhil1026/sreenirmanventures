
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY || '' });

const SYSTEM_INSTRUCTION = `
You are the AI Concierge for "SREE NIRMAN VENTURES", a world-class luxury construction and real estate visionary. 
SREE NIRMAN VENTURES specializes in four premium pillars:
1. Precision Plots (Land Banking & Strategic Acquisition)
2. Bespoke Villas (Custom Luxury Living)
3. Interior Curation (Turnkey Aesthetic Design)
4. Property Management (Asset Care & Concierge Services)

Your tone is sophisticated, professional, elite, and highly knowledgeable. 
You provide insights on construction quality, investment potential, and the aesthetic philosophy of these services.
Keep responses concise but luxurious. 
Do not mention "The Onyx Heights", "Marble Pavilion", or "Azure Estate" as these are no longer in our portfolio. 
Focus on explaining our expertise in transforming raw land into legacies and shells into sanctuaries.
`;

export const chatWithConcierge = async (message: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-1.5-flash',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.9,
      },
    });
    return response.text || "I apologize, but I am momentarily disconnected from the network. How may I assist you otherwise?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The luxury concierge is currently attending to another client. Please try again in a moment.";
  }
};
