const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");

/* GET home page. */
router.get("/", homeController.GetHomePage);

module.exports = router;
