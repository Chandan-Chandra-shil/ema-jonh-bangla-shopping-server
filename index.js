const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());

app.get("/", (req, res) => {
  res.send("ema jsonh bangla shopping  server is running ....");
});

app.listen(port, () => {
  console.log(`ema jonh server running PORT ${port}`);
});
