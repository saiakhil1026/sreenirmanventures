import { GoogleGenerativeAI } from "@google/generative-ai";
import { REAL_PROJECTS, PLOTS_PROJECTS, VILLAS_PROJECTS, INTERIOR_PROJECTS, MANAGEMENT_PROJECTS } from '../data/projects';

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

if (!apiKey) {
  console.error("CRITICAL: VITE_GEMINI_API_KEY is missing in environment variables.");
}

const genAI = new GoogleGenerativeAI(apiKey || '');

// Prepare Project Context
const allProjects = [
  ...REAL_PROJECTS,
  ...PLOTS_PROJECTS,
  ...VILLAS_PROJECTS,
  ...INTERIOR_PROJECTS,
  ...MANAGEMENT_PROJECTS
];

const projectContext = allProjects.map(p =>
  `- ${p.title} (${p.category}): ${p.description}. Location: ${p.location}. Status: ${p.year}.`
).join('\n');

const SYSTEM_INSTRUCTION = `
You are the AI Concierge for "SREE NIRMAN VENTURES", a world-class luxury construction and real estate visionary. 

SREE NIRMAN VENTURES specializes in:
1. Precision Plots
2. Bespoke Villas
3. Interior Curation
4. Property Management

Here is our current PORTFOLIO of projects. Use this specific information to answer user queries:
${projectContext}

Your tone is sophisticated, professional, elite, and highly knowledgeable. 
If a user expresses interest in buying, investing, or visiting, encourage them to use the "Contact" options (WhatsApp/Call) or visit our office in Guntur.
Do NOT invent projects not listed above.
`;

export const chatWithConcierge = async (message: string) => {
  if (!apiKey) {
    return "Configuration Error: API Key is missing. Please contact support.";
  }

  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction: SYSTEM_INSTRUCTION
    });

    const result = await model.generateContent(message);
    const response = await result.response;
    return response.text();

  } catch (error: any) {
    console.error("Gemini API Error Details:", error);

    // Check for specific error types if possible (e.g. key expired, quota exceeded)
    if (error.message?.includes("API key")) {
      return "Authentication Error: Please verify your access credentials.";
    }
    if (error.message?.includes("404") || error.message?.includes("not found")) {
      return "Configuration Error: The AI model is not available. Please ensure the 'Generative Language API' is enabled in your Google Cloud Console for this API key.";
    }

    return `The luxury concierge is currently attending to another client. (Error: ${error.message || 'Unknown'})`;
  }
};
