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
      {
        carModel: "G-Class SUV",
        manufacturer: "Mercedes-Benz",
        img: "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my23/g/all-vehicles/2023-G550-SUV-AVP-D.png",
      },

      {
        carModel: "GLC Coupe",
        manufacturer: "Mercedes-Benz",
        img: "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my23/glc/coupe/all-vehicles/2023-GLC300-COUPE-AVP-D.png",
      },
      {
        carModel: "Mayback S-Class",
        manufacturer: "Mercedes-Benz",
        img: "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my22/s/maybach/all-vehicles/2022-MAYBACH-SEDAN-AVP-DR.png",
      },
      {
        carModel: "SL Roadster",
        manufacturer: "Mercedes-Benz",
        img: "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my23/sl/all-vehicles/2023-AMG-SL55-ROADSTER-AVP-D.png",
      },

      {
        carModel: "V-Class",
        manufacturer: "Mercedes-Benz",
        img: "https://assets.oneweb.mercedes-benz.com/bbd/images/v1/4689/a/89/2ec734cdbf9055c4b20f24121be3454879f7b.png",
      },

      {
        carModel: "CLE Coupé",
        manufacturer: "Mercedes-Benz",
        img: "https://assets.oneweb.mercedes-benz.com/bbd/images/v1/7502/6/c6/36897740a6d30455367a7c8504f7e2401394c.png",
      },
    ]);
  }
};
