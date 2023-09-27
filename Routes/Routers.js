const express = require("express");
const router = express.Router();
const ApiController = require("../Controllers/ApiController");

router

  .get("/", ApiController.Api)

  .get("/", ApiController.ApiTesting);

module.exports = router;
