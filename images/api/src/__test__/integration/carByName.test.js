const app = require("./../../app");
const supertest = require("supertest");
const knexConfig = require("./../../db/knexfile");
const knex = require("knex")(knexConfig.development);
const request = supertest(app);

describe("GET /cars/:model", () => {
  beforeAll(async () => {
    await knex("cars").insert({
      carModel: "car",
      manufacturer: "car",
      img: "image",
    });
  });

  afterAll(async () => {
    await knex("cars").where("carModel", "car").del();
  });

  test("Get specific car from database by name", async () => {
    const response = await request.get(`/cars/car`);
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body[0]).toBeInstanceOf(Object);
  });

  test("Returns 404 for non-existent car", async () => {
    const nonExistentCarName = "non-existent-car";
    const response = await request.get(`/cars/${nonExistentCarName}`);
    expect(response.status).toBe(404);
    expect(response.body).toEqual({ error: "Car not found" });
  });
});
