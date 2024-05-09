const passport = require("passport");
const LocalStrategy = require("passport-local");
const users = require("./MySQL");

const strategy = new LocalStrategy((username, password, done) => {
  const tempUser = users.getUser(username, password);
  if (!tempUser) {
    return done(null, false);
  } else if (tempUser.password !== password) {
    return done(null, false);
  }
  return done(null, tempUser);
});

passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser(async (id, done) => {
  const user = users.getUserById(id);
  if (user) {
    done(null, user);
  }
});

module.exports = strategy;
