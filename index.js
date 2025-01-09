const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/"),
  (req, res) => {
    res.send("Welcome to the express API");
  };

app.listen(PORT),
  () => {
    console.log(`Server is runnin on port ${PORT}`);
  };