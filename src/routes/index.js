const Router = require("express").Router;
const { youtubeHandler, linkedinHandler, instagramHandler, likeeHandler, facebookHandler, pintrestHandler } = require("../handlers");
const downloaderRouter = Router();

downloaderRouter.get("/youtube", youtubeHandler);
downloaderRouter.get("/linkedin", linkedinHandler);
downloaderRouter.get("/instagram", instagramHandler);
downloaderRouter.get("/likee", likeeHandler);
downloaderRouter.get("/facebook", facebookHandler);
downloaderRouter.get("/pintrest", pintrestHandler);

module.exports = {
  downloaderRouter,
};
