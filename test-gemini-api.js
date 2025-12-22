import { GoogleGenerativeAI } from "@google/generative-ai";

// Test the API key from environment variables
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

console.log("API Key exists:", !!apiKey);
console.log("API Key length:", apiKey ? apiKey.length : 0);

if (apiKey) {
  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    console.log("Model initialized successfully");
    
    // Test a simple prompt
    const result = await model.generateContent("Hello, what model are you?");
    const response = await result.response;
    const text = response.text();
    
    console.log("API Response:", text);
  } catch (error) {
    console.error("Error testing Gemini API:", error.message);
  }
} else {
  console.log("No API key found in environment variables");
}