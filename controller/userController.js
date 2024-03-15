function userController(req, res, next) {
  res.render("users", {
    title: "users Chat-applications",
  });
}

module.exports = { userController };
