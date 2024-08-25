require("dotenv").config();

const express = require("express");

// Express app
const app = express();

// Get Response route
app.get("/", (req, res) => {
  res.json({ msg: "This is the get response" });
});

// Listen for requests
app.listen(process.env.PORT_URL, () => {
  console.log("This is the get response");
});
