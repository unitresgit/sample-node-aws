const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to my Express server!" });
});

app.get("/message", (req, res) => {
  res.status(400).json({ message: "Hello from Express!" });
});

app.get("/test", (req, res) => {
  res.status(500).json({ message: "Error" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
