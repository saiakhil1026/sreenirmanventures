
import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = "AIzaSyAFIOlSu4NDhheKaUAU08VMenmSVltnPVg";

const models = ["gemini-1.5-flash", "gemini-1.5-pro", "gemini-pro", "models/gemini-1.5-flash"];

async function test() {
    const genAI = new GoogleGenerativeAI(apiKey);

    for (const modelName of models) {
        console.log(`\nTesting model: ${modelName}`);
        try {
            const model = genAI.getGenerativeModel({ model: modelName });
            const result = await model.generateContent("Hello");
            const response = await result.response;
            console.log(`SUCCESS with ${modelName}:`, response.text());
            return; // Exit on first success
        } catch (error) {
            console.error(`FAILED with ${modelName}:`, error.message.split('\n')[0]); // Log first line of error
        }
    }
}

test();
