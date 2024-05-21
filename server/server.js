const express = require("express");
const passport = require("passport");
const { Strategy } = require("passport-local");
const User = require("./db/userModel");
const bcrypt = require("bcrypt");
const session = require("express-session");
const user_route = require("./routes/auth.js");

const app = express();

const dbConnect = require("./db/dbConnect.js");
dbConnect();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "adopet",
    resave: false,
    saveUninitialized: false,
    cookie: {
      
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

const requireAuth = (req, res, next)=>{
  console.log("requiring middleware....");
}

passport.serializeUser((user, cb)=>{
  console.log(11,"serializing user"+JSON.stringify(user))
  return cb(null, user.id)
});

passport.deserializeUser((user, cb) => {
  console.log(12,"deserialized user" + user);
  return cb(null, user);
});

passport.use(
  "local",
  new Strategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async function verify(email, password, cb) {
      try {
        const logged_user = await User.findOne({ email: email });
        console.log(2, logged_user)
        if (logged_user) {
          console.log(3,"user found")
          bcrypt.compare(password, logged_user.password, (err, result) => {
            if (err) {
              return cb(err);
            } 
            else {
              if (result) {
                return cb(null, logged_user);
              } else {
                return cb(null, false);
              }
            }
          });
        } 
        else {
          console.log(4, "user not found")
          return cb("User not found");
        }
      }
      catch (err) {
        console.log(5, "error in finding user")
        return cb(err);
      }
    }
  )
);

app.get("/", (req, res) => {
  res.send("Hello from server");
});

app.use("/user", user_route);

app.listen(5000, () => {
  console.log(`Listening on Port 5000`);
});
