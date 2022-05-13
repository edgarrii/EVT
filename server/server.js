const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
const port = 3030;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log("Server started");
});

const writeGreeting = (obj) => {
  const strings = obj.email.split(".");
  const domen = strings[strings.length - 1];
  let result = "";

  switch (domen) {
    case "by":
      result = `${obj.email} Добры дзень!, ${obj.name}\n`;
      break;
    case "ru":
      result = `${obj.email} Добрый день!, ${obj.name}\n`;
      break;
    default:
      result = `${obj.email} Hello!, ${obj.name} \n`;
      break;
  }

  return result;
};

app.post("/write-to-file", (req, res) => {
  const result = writeGreeting(req.body);
  fs.appendFile("results.txt", result, (err) => {});
});
