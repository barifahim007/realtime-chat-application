function getlogin(req, res, next) {
  res.render("index", {
    title: "login Chat-applications",
  });
}

module.exports = { getlogin };
