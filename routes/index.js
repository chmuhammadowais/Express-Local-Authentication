var express = require("express");
var flash = require("connect-flash");
var session = require("express-session");
var router = express.Router();

router.use(flash());
router.use(
  session({
    secret: "dev",
    saveUninitialized: false,
    resave: false,
  })
);

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.get("/login", function (req, res) {
  res.render("form", {
    heading: "Login",
    link: "/login",
    success: req.flash("success"),
    error: req.flash("error"),
  });
});
router.get("/register", function (req, res) {
  res.render("form", {
    heading: "Register",
    link: "/register",
    success: req.flash("success"),
    error: req.flash("error"),
  });
});
router.get("/profile", function (req, res) {
  if (req.isAuthenticated()) {
    res.status(200).render("profile", { user: req.user.username });
  } else {
    res.status(401).redirect("/login");
  }
});
module.exports = router;
