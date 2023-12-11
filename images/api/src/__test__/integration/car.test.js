const app = require("./../../app");
const supertest = require("supertest");
const knexConfig = require("./../../db/knexfile");
const knex = require("knex")(knexConfig.development);
const request = supertest(app);
describe("GET /cars", () => {
  test("Return all cars from database", async () => {
    const response = await request.get("/cars");
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body[0]).toBeInstanceOf(Object);
  });
});
