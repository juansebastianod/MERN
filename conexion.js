const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/crudmernstack");

const objetodb = mongoose.connection;

objetodb.on("connected", () => {
  console.log("conexion correcta");
});
objetodb.on("error", () => {
  console.log("error en la conexion");
});

module.exports=mongoose;