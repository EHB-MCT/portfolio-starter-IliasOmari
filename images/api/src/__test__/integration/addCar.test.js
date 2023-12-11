const app = require("./../../app");
const supertest = require("supertest");
const knexConfig = require("./../../db/knexfile");
const knex = require("knex")(knexConfig.development);
const request = supertest(app);

describe("POST /cars", () => {
  afterAll(async () => {
    await knex("cars").where("carModel", "car").del();
  });

  test("Return success message after posting a car", async () => {
    const newCar = {
      carModel: "car",
      manufacturer: "car",
      img: "image",
    };
    const response = await request.post(`/cars`).send(newCar);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: "Car added" });
  });

  test("Returns 400 for empty inputs", async () => {
    const newCar = {
      carModel: "",
      manufacturer: "",
      img: "",
    };
    const response = await request.post(`/cars`).send(newCar);
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: "Fill the missings fields" });
  });
});
