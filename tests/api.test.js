// filepath: c:\Users\Ulises\Documents\Yadi\2025\construccion_de_software\Producto-Academico\tests\api.test.js
const request = require("supertest");
const fs = require("fs");
const path = require("path");
const { app, initDB, sequelize } = require("../index");

describe("API /export-json", () => {
  beforeAll(async () => {
    await initDB();
  });

  afterAll(async () => {
    await sequelize.close();
  });

  test("debe devolver un JSON con imágenes", async () => {
    const response = await request(app).get("/export-json");
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("images");
    expect(Array.isArray(response.body.images)).toBe(true);
    expect(response.body.images.length).toBeGreaterThan(0);
  });

  test("debe guardar el archivo _data/images.json correctamente", async () => {
    const filePath = path.join(__dirname, "../_data/images.json");
    const fileExists = fs.existsSync(filePath);
    expect(fileExists).toBe(true);

    const fileContent = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    expect(fileContent).toHaveProperty("images");
    expect(Array.isArray(fileContent.images)).toBe(true);
  });
});