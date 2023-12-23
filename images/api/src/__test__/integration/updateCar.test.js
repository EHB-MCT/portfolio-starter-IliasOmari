const app = require("./../../app");
const supertest = require("supertest");
const knexConfig = require("./../../db/knexfile");
const knex = require("knex")(knexConfig.development);
const request = supertest(app);

describe("PUT /cars/:model", () => {
  beforeAll(async () => {
    await knex("cars").insert({
      carModel: "car",
      manufacturer: "car",
      img: "image",
    });
  });

  afterAll(async () => {
    await knex("cars").where("carModel", "UpdatedModel").del();
  });

  test("Get specific car from database by name", async () => {
    const updatedData = {
      carModel: "UpdatedModel",
    };
    const response = await request.put(`/cars/car`).send(updatedData);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: "Car updated successfully" });
  });

  test("Returns 404 for updating a non-existent car", async () => {
    const updatedData = {
      carModel: "UpdatedModel",
    };

    // Make the request to update a non-existent car
    const nonExistentCarName = "non-existent-name";
    const response = await request
      .put(`/cars/${nonExistentCarName}`)
      .send(updatedData);
    expect(response.status).toBe(404);
    expect(response.body).toEqual({ error: "Car not found" });
  });

  test("Returns 400 when body is empty", async () => {
    const updatedData = {
      carModel: "",
    };

    const response = await request.put(`/cars/car`).send(updatedData);
    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      error: "Please fill in the missing fields",
    });
  });
});
