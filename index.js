const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello World from Express!" });
});

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello, REST API!", time: new Date().toISOString() });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));