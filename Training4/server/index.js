const express = require("express");
const jokesData = require("./jokeData.json");
const countryData = require("./countries.json");
const cors = require("cors");

const app = express();
const port = 5000;

app
  .use(cors())
  .get("/jokes", (req, res) => {
    res.send(JSON.stringify(jokesData));
  })
  .get("/jokes/:id", (req, res) => {
    const { id } = req.params;

    const result = jokesData.find((joke) => joke.id === +id);
    res.send(JSON.stringify(result));
  })
  .get("/country", (req, res) => {
    const { keyword } = req.query;
    
    const result = countryData.filter((country) => country.name.includes(keyword));
    res.send(JSON.stringify(result));
  });

app.listen(port, () => {
  console.log(`Server running ${port}`);
});
