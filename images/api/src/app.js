const express = require("express");
const app = express();
const cors = require("cors");
const knexConfig = require("./db/knexfile.js");
const carInput = require("./__test__/helpers/checkInputs.js");
const knex = require("knex")(knexConfig.development);
require("dotenv").config();
const port = 3000;
app.use(express.json());
app.use(cors());

app.get("/cars", async (req, res) => {
  const cars = await knex("cars").select();
  res.status(200).json(cars);
});

app.get("/cars/:model", async (req, res) => {
  const carModel = req.params.model;
  const checkCar = await knex("cars").where("carModel", carModel);
  if (checkCar.length == 0) {
    return res.status(404).json({ error: "Car not found" });
  }
  return res.status(200).json(checkCar);
});

app.post("/cars", async (req, res) => {
  if (carInput(req.body)) {
    return res.status(400).json({ error: "Fill the missings fields" });
  }

  const newcars = {
    carModel: req.body.carModel,
    manufacturer: req.body.manufacturer,
    img: req.body.img,
  };
  await knex("cars").insert(newcars);
  res.status(200).json({ message: "Car added" });
});

app.put("/cars/:model", async (req, res) => {
  if (!req.body.carModel) {
    return res.status(400).json({ error: "Please fill in the missing fields" });
  }
  const car = req.params.model;

  const checkCar = await knex("cars").where("carModel", car);
  if (checkCar.length == 0) {
    return res.status(404).json({ error: "Car not found" });
  }
  await knex("cars")
    .where("carModel", car)
    .update({ carModel: req.body.carModel });

  res.status(200).json({ message: "Car updated successfully" });
});

app.delete("/cars/:model", async (req, res) => {
  const carModel = req.params.model;
  const checkCar = await knex("cars").where("carModel", carModel);

  if (checkCar.length == 0) {
    return res.status(404).json({ error: "Car not found" });
  }
  return res.status(200).json({ message: "Car deleted" });
});

module.exports = app;
