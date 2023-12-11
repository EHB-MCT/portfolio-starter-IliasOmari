const app = require("./../../app");
const supertest = require("supertest");
const knexConfig = require("./../../db/knexfile");
const knex = require("knex")(knexConfig.development);
const request = supertest(app);

describe("DELETE /cars/:model", () => {
  beforeAll(async () => {
    await knex("cars").insert({
      carModel: "car",
      manufacturer: "car",
      img: "image",
    });
  });

  test("Delete car from database by name", async () => {
    const response = await request.delete(`/cars/car`);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: "Car deleted" });

    const deletedCar = await knex("cars").where("carModel", "car").first();
    expect(deletedCar).toBeUndefined;
  });

  test("Returns 404 for non-existent car", async () => {
    const nonExistentCarName = "non-existent-car";
    const response = await request.delete(`/cars/${nonExistentCarName}`);
    expect(response.status).toBe(404);
    expect(response.body).toEqual({ error: "Car not found" });
  });
});
