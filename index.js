var bodyParser = require("body-parser");
var express = require("express");
const cors = require("cors");
var app = express();
var router = require("./routes/routes");

app.set("view engine", "ejs");

app.use(express.static("public"))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.use("/", router);

app.listen(3000, () => {
  console.log("Servidor rodando");
});
