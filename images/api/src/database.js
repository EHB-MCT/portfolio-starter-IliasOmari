const knex = require("knex")({
  client: "pg",
  connection: {
    host: process.env.POSTGRES_HOST,
    port: 5432,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
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
