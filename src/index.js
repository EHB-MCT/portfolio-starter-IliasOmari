const { error } = require("console");
const express = require("express");
const app = express();
const cors = require("cors");
const knex = require("./database.js");
require("dotenv").config();
const port = 3000;
app.use(express.json());
app.use(cors());

app.get("/messages", async (req, res) => {
  const messages = await knex("messages").select();
  res.json(messages);
});
app.listen(port, (err) => {
  if (!err) {
    console.log("running on port " + port);
  } else {
    console.error(err);
  }
});
