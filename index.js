const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5001;

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname)));

// Start the server
app.listen(PORT, () => {
    console.log(`Canteen Website server is running on http://localhost:${PORT}`);
});
