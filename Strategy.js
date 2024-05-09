const users = require("./MySQL");
const passport = require("passport");
const LocalStrategy = require("passport-local");

const strategy = new LocalStrategy(async (username, password, done) => {
  const tempUser = await users.getUser(username);
  if (!tempUser) {
    return done(null, false);
  }
  if (tempUser.password !== password) {
    return done(null, false);
  }
  return done(null, tempUser);
});

passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser(async (id, done) => {
  const user = await users.getUserById(id);
  if (user) {
    return done(null, user);
  }
});

module.exports = strategy;
