const express = require("express");
const app = express();

const PORT = 8000;

app.get("/home", (req, res) => {
  res.sendStatus(200);
});

app.listen(PORT, (error) => {
  if (error) {
    console.error("Error at server launch:", error);
  }
  console.log(`Server works at port ${PORT}!`);
});
