const express = require("express");

// Express app
const app = express();

// Get Response
app.get("/", (req, res) => {
  res.json({ msg: "Response Message" });
});

// Listen for requests
app.listen(4000, () => {
  console.log("Port is on 5555");
});
