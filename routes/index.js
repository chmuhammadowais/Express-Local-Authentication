var express = require("express");
var flash = require("connect-flash");
var session = require("express-session");
var passport = require("passport");
var strategy = require("../Strategy");
var MySQLStore = require("../node_modules/express-mysql-session")(session);
var users = require("../MySQL");
var router = express.Router();

const store = new MySQLStore({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "admin",
  database: "authentication",
  clearExpired: true,
  expiration: 5000,
  checkExpirationInterval: 5000,
  connectionLimit: 1,
  schema: {
    tableName: "sessions",
    columnNames: {
      session_id: "session_id",
      expires: "expires",
      data: "data",
    },
  },
});

router.use(flash());
router.use(
  session({
    secret: "dev",
    saveUninitialized: false,
    resave: false,
    store: store,
  })
);
passport.use(strategy);
router.use(passport.session());
router.use(passport.initialize());
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
    res
      .status(200)
      .set("Cache-Control", "no-cache, no-store, must-revalidate")
      .set("Pragma", "no-cache")
      .render("profile", { user: req.user.username });
  } else {
    res.status(401).redirect("/login");
  }
});
router.post("/register", (req, res) => {
  const { username, password } = req.body;
  users
    .createUser(username, password)
    .then((data) => {
      req.flash("success", `User registered with ID: ${data}`);
      res.redirect("/register");
    })
    .catch((err) => {
      req.flash("error", `Error: ${err}`);
      res.redirect("/register");
    });
});
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/profile",
    failureRedirect: "/login",
    successFlash: "Log in success",
    failureFlash: "Log in failed",
  }),
  (req, res) => {
    if (req.isAuthenticated()) {
      res.send("Authorized");
    } else {
      res.send("Unauthorized");
    }
  }
);
router.get("/logout", (req, res) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    } // Handle errors appropriately
    res.redirect("/login"); // Redirect to login page after logout
  });
});
module.exports = router;
