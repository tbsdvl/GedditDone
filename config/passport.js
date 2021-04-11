const passport = require("passport");
const LocalStrategy = require("passport").Strategy;
const Database = require("../models");

//Using local strategy we want to be able to login with email and password
passport.use(
  // Sign in not using uername but only email plus password
  new LocalStrategy(
    { usernameSpot: "email" },

    // Runs when user is signing in
    (email, password, complete) => {
      Database.User.findOne({ where: { email: email } }).then(
        (DatabaseUser) => {
          // When in case there is no user under the email provided... msg below will display
          if (!DatabaseUser) {
            return complete(null, false, { msg: "Wrong email address." });
          }

          // When in case there is a user under the email provided but the password provided is wrong... msg below will display
          else if (!DatabaseUser.correctPassword(password)) {
            return complete(null, false, { msg: "Wrong password." });
          }
          // If all of the above doesn't happen... return the user.
          return complete(null, DatabaseUser);
        }
      );
    }
  )
);

// User can sign up by creating an account with email..
passport.use(
  "create-account",
  // User can sign in not using uername but only email plus password
  new LocalStrategy(
    { usernameSpot: "email" },

    // Runs when user is signing in
    (email, complete) => {
      Database.User.findOne({ where: { email: email } }).then(
        (DatabaseUser) => {
          // When in case there is no user under the email provided... msg below will display
          if (!DatabaseUser) {
            return complete(null, false, {
              msg: "The email address is already in use.",
            });
          }
          // If all of the above doesn't happen... return the user.
          return complete(null, DatabaseUser);
        }
      );
    }
  )
);

// For all the above to be able to work sequelize had to serialize and deserialize the user.
passport.serializeUser((user, complete) => {
  complete(null, user);
});
// Might have to change the id parts, trying to understand how it works
passport.deserializeUser((id, complete) => {
  complete(null, id);
});

module.exports = passport;
