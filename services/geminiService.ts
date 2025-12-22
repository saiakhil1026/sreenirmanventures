import { GoogleGenerativeAI } from "@google/generative-ai";
import { REAL_PROJECTS, PLOTS_PROJECTS, VILLAS_PROJECTS, INTERIOR_PROJECTS, MANAGEMENT_PROJECTS } from '../data/projects';

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

if (!apiKey) {
  console.error("CRITICAL: VITE_GEMINI_API_KEY is missing in environment variables.");
  console.error("Please ensure you have a .env file with VITE_GEMINI_API_KEY=your_api_key_here");
}

// Validate API key format
if (apiKey && !apiKey.startsWith('AIza')) {
  console.warn("WARNING: API key format doesn't match expected Google AI format");
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

const SYSTEM_INSTRUCTION = `You are the AI Concierge for "SRIKANTH", a luxury construction and real estate company. Use the provided project information to answer queries. Be professional and knowledgeable. If users show interest, direct them to contact options.`;

export const chatWithConcierge = async (message: string) => {
  if (!apiKey) {
    return "Configuration Error: API Key is missing. Please contact support.";
  }

  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction: SYSTEM_INSTRUCTION
    });

    // Include project context in the user message for better relevance
    const enhancedMessage = `${message}\n\nReference Projects:\n${projectContext}`;
    
    const result = await model.generateContent(enhancedMessage);
    const response = await result.response;
    return response.text();

  } catch (error: any) {
    console.error("Gemini API Error Details:", error);
    
    // Log detailed error information
    if (error?.response) {
      console.error("Error response:", error.response);
    }
    if (error?.status) {
      console.error("Error status:", error.status);
    }

    // Check for specific error types if possible (e.g. key expired, quota exceeded)
    if (error?.message?.includes("API key")) {
      return "Authentication Error: Please verify your access credentials.";
    }
    if (error?.message?.includes("404") || error?.message?.includes("not found")) {
      return "Configuration Error: The AI model is not available. Please ensure the 'Generative Language API' is enabled in your Google Cloud Console for this API key.";
    }
    if (error?.message?.includes("400")) {
      return "Request Error: Invalid request format. Please try rephrasing your query.";
    }
    if (error?.message?.includes("429")) {
      return "Rate Limit Exceeded: Too many requests. Please wait a moment before trying again.";
    }
    if (error?.message?.includes("500")) {
      return "Server Error: Internal server error. Please try again later.";
    }
    if (error?.message?.includes("timeout")) {
      return "Request Timeout: The request took too long to process. Please try again.";
    }
    
    // Return more detailed error information
    const errorMessage = error?.message || 'Unknown error';
    const errorStatus = error?.status ? ` (Status: ${error.status})` : '';
    return `The luxury concierge is currently attending to another client. ${errorMessage}${errorStatus}`;
  }
};
