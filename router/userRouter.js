const express = require("express");
const { userController } = require("../controller/userController");
const {
  decorateHtmlResponse,
} = require("../middleware/common/decorateHtmlResponse");

const router = express.Router();

router.get("/", decorateHtmlResponse("Users"), userController);

module.exports = router;
