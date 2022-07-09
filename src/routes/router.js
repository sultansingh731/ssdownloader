const express = require("express");
const { youtubeHandler } = require("../handlers/youtube.handler");
const downloaderRouter = express.Router();

router.get("/youtube", youtubeHandler);

module.exports = {
  downloaderRouter,
};
