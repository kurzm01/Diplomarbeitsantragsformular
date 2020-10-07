var express = require("express");
var router = express.Router();
const dbinterface = require("../db/dbinterface");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/lehrer", async function (req, res, next) {
  res.send(await dbinterface.getLehrer());
});

router.get("/klassen", async function (req, res, next) {
  res.send(await dbinterface.getKlassen());
});

module.exports = router;
