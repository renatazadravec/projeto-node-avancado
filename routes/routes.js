var express = require("express");
var app = express();
var router = express.Router();
var HomeController = require("../controllers/HomeController");

router.get("/", HomeController.index);
router.post("/", HomeController.criar);

module.exports = router;
