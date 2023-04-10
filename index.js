const PORT = 8000;
const cheerio = require("cheerio");
const express = require("express");
const axios = require("axios").default;

const app = express();
// challenges = [] // They are an array we indicate that in here

app.get("/hello", (req, res) => {
  res.json("Hello, Welcome to my Stream");
});

app.get("/challenges", (req, res) => {
  try {
    var challenges = [];
    var html = "";
    axios.get("https://ghw.mlh.io/challenges")
    .then((response) => {
      html = response.data;
    })
    .catch (function(error) {
    console.error(error);
    })
    
    res.status(200).json(html);

    
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
