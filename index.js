const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
    res.send("Hello from Express API!");
});

app.get("/api/data", (req, res) => {
    res.json({ message: "Here is some data!" });
});

app.listen(port, () => {
    console.log(`API listening at http://localhost:${port}`);
});
