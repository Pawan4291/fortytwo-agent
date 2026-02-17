const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Agent Running");
});

app.post("/", (req, res) => {
  res.json({ reply: "Hello from my Fortytwo Agent" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
