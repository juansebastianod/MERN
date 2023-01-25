const express = require("express");
const app = express();

//importart conexion

const archivo = require("./conexion");

app.get("/", (req, res) => {
  res.sendFile("./joro.png", {
    root: __dirname,
  });
});

app.listen(3000, function () {
  console.log("el servidor esta corriendo corectamente");
});
