const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const { getAll } = require('./db');

app.get("/", async (req, res) => {
    try {
        const result = await getAll(); // Wait for getAll to complete
        res.json(result); // Send the result as JSON
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while fetching data.');
    }
});

app.listen(5000, () => {
    console.log("Server started on 3000..");
});
