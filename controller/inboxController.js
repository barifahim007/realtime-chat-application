function inboxController(req, res, next) {
  res.render("inbox", {
    title: "inbox Chat-applications",
  });
}

module.exports = { inboxController };
