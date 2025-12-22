// Debug script to test Gemini API connectivity
import { GoogleGenerativeAI } from "@google/generative-ai";

// Get API key from environment variables
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

console.log("=== Gemini API Debug Script ===");
console.log("API Key exists:", !!apiKey);
if (apiKey) {
  console.log("API Key length:", apiKey.length);
  console.log("API Key starts with:", apiKey.substring(0, 10) + "...");
}

// Test function
async function testGeminiAPI() {
  if (!apiKey) {
    console.log("❌ No API key found. Please check your .env file.");
    return;
  }

  try {
    console.log("\n🔧 Initializing GoogleGenerativeAI...");
    const genAI = new GoogleGenerativeAI(apiKey);
    
    console.log("🔧 Getting generative model...");
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      systemInstruction: "You are a helpful assistant." 
    });
    
    console.log("✅ Model initialized successfully!");
    
    console.log("\n📤 Sending test message...");
    const result = await model.generateContent("Hello, what model are you and what's your purpose?");
    const response = await result.response;
    const text = response.text();
    
    console.log("✅ API Response received:");
    console.log(text);
    
  } catch (error) {
    console.log("❌ Error occurred:");
    console.log("Name:", error.name);
    console.log("Message:", error.message);
    console.log("Stack:", error.stack);
    
    // Specific error handling
    if (error.message?.includes("API_KEY_INVALID")) {
      console.log("🔑 The API key appears to be invalid. Please check your .env file.");
    } else if (error.message?.includes("404")) {
      console.log("🔍 The model was not found. Check if the model name is correct.");
    } else if (error.message?.includes("400")) {
      console.log("📝 Bad request. Check the request format.");
    } else if (error.message?.includes("403")) {
      console.log("🔐 Forbidden. Check API key permissions.");
    } else if (error.message?.includes("429")) {
      console.log("🚦 Rate limit exceeded. Try again later.");
    }
  }
}

// Run the test
testGeminiAPI();