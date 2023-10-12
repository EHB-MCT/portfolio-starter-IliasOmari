const knex = require("knex")({
  client: "mysql2",
  connection: {
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "",
    database: "messages",
  },
});

async function main() {
  try {
    const exists = await knex.schema.hasTable("messages");
    if (!exists) {
      await knex.schema.createTable("messages", (table) => {
        table.increments("id").primary();
        table.string("content");
      });
      await knex("messages").insert([
        {
          content: "Hello this is a test",
        },

        {
          content: "Hello this is another test",
        },

        {
          content: "Hello this is an other other test",
        },
      ]);
    }
  } catch (error) {
    console.log(error);
  }
}

main();
module.exports = knex;
