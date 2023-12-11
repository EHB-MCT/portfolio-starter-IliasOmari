/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  const cars = await knex("cars").select();
  if (cars.length == 0) {
    await knex("cars").insert([
      {
        carModel: "EQB SUV",
        manufacturer: "Mercedes-Benz",
        img: "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my22/eqb-suv/all-vehicles/2022-EQB-AMGLINE-SUV-AVP-DR.png",
      },
      {
        carModel: "EQE Sedan",
        manufacturer: "Mercedes-Benz",
        img: "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my23/eqe-sedan/all-vehicles/2023-EQE350-SEDAN-AVP-DR.png",
      },
      {
        carModel: "EQE SUV",
        manufacturer: "Mercedes-Benz",
        img: "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my23/eqe-suv/all-vehicles/2023-EQE350-SUV-AVP-DR.png",
      },
    ]);
  }
};
