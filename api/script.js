const express = require('express');
const fetch = require('node-fetch');
const app = express();

// Function to generate a random filename
function generateRandomFilename() {
    const randomString = Array.from({ length: 16 }, () => Math.floor(Math.random() * 16).toString(16)).join('');
    return randomString + randomString + '.gif';
}

// Route to handle requests for random image
app.get('/random-image', async (req, res) => {
    const baseUrl = 'https://shame.rip/infrastructure/asset/animals/';
    let imageUrl, filename;

    // Try to get a random image URL that exists
    while (!imageUrl) {
        const randomFilename = generateRandomFilename();
        const response = await fetch(baseUrl + randomFilename);
        if (response.ok) {
            imageUrl = baseUrl + randomFilename;
            filename = randomFilename;
        }
    }

    // Send JSON response with image URL and filename
    res.json({ file: imageUrl, filename: filename });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
