var knex = require("knex")({
  client: "mysql2",
  connection: {
    host: "localhost",
    user: "root",
    port: "",
    password: "",
    database: "projeto_node",
  },
});

module.exports = knex;
