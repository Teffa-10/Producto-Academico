const express = require("express");
const fs = require("fs");
const { Sequelize, DataTypes } = require("sequelize");

const app = express();
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "database.sqlite",
});

// Modelo de datos
const Image = sequelize.define("Image", {
  path: { type: DataTypes.STRING, allowNull: false },
});

// Inicializar base de datos
async function initDB() {
  await sequelize.sync({ force: true });
  await Image.bulkCreate([
    { path: "/assets/images/htb-crocodile/answer-0.png" },
    { path: "/assets/images/htb-crocodile/answer-1.png" },
    { path: "/assets/images/htb-crocodile/answer-2.png" },
  ]);
}

// Ruta para exportar JSON
app.get("/export-json", async (req, res) => {
  const images = await Image.findAll({ attributes: ["path"] });
  const jsonData = {
    images: images.map((img) => img.path),
  };

  // Guardar en archivo _data/images.json
  fs.mkdirSync("_data", { recursive: true });
  fs.writeFileSync("_data/images.json", JSON.stringify(jsonData, null, 2));

  res.json(jsonData);
});

const path = require("path");

// Ruta para servir el archivo index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Exportaciones para pruebas
module.exports = { app, initDB, sequelize, Image };

if (require.main === module) {
  initDB().then(() => {
    app.listen(3000, () => console.log("🚀 Servidor corriendo en http://localhost:3000"));
  });
}