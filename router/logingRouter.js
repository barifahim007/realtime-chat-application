const express = require("express");
const { getlogin } = require("../controller/loginController");
const {
  decorateHtmlResponse,
} = require("../middleware/common/decorateHtmlResponse");

const router = express.Router();

router.get("/", decorateHtmlResponse("login"), getlogin);

module.exports = router;
