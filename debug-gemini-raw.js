
const apiKey = "AIzaSyAFIOlSu4NDhheKaUAU08VMenmSVltnPVg";
const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`;

async function test() {
    console.log("Testing gemini-pro...");
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: "Hello" }] }]
            })
        });

        const data = await response.json();
        if (data.error) {
            console.log("ERROR_MESSAGE:", data.error.message);
        } else {
            console.log("SUCCESS");
        }
    } catch (error) {
        console.error("Fetch Error:", error);
    }
}

test();
