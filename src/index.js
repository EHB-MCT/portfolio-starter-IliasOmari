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

app.post("/message", async (req, res) => {
  if (!req.body.content) {
    return res.status(400).send({ error: "Fill the missings fields" });
  }

  const newMessage = {
    content: req.body.content,
  };

  await knex("messages").insert(newMessage);
  res.status(200).send("Message posted successfully");
});

app.listen(port, (err) => {
  if (!err) {
    console.log("running on port " + port);
  } else {
    console.error(err);
  }
});
