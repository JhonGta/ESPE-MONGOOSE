// Archivo principal para levantar la app
const express = require("express");
const mongoose = require("mongoose");
require("./models/course");
const courseRouter = require("./routers/courseRouter");

const connectionString = "mongodb://admin:password123@localhost:27017/espe-mongoose?authSource=admin";

mongoose.connect(connectionString)
  .then(() => console.log("Conexión exitosa a MongoDB"))
  .catch((error) => console.error("Error de conexión a MongoDB:", error));

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/course", courseRouter);

app.listen(8080, () => console.log("Servidor iniciado"));
