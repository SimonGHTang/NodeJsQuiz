const express = require("express");
const controller = require("../controllers/home.server.controller");

const router = express.Router();

//home page
router.get('/', controller.showHomePage);

module.exports = router;