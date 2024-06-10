const express = require("express");
const passport = require("passport");
const { Strategy } = require("passport-local");
const User = require("./db/userModel");
const bcrypt = require("bcrypt");
const session = require("express-session");
const user_route = require("./routes/auth.js");
const adoptPost_route = require("./routes/adoptPost.js");
const rescue_route = require('./routes/rescuePost.js')
const googleStrategy = require("passport-google-oauth20").Strategy;
const cors = require("cors");
// const MongoStore = require("connect-mongo");
const env = require("dotenv");

const app = express();

const dbConnect = require("./db/dbConnect.js");
dbConnect();

env.config();

app.use(cors({
  origin: "http://localhost:3000",
  methods: "GET,POST,PUT,PATCH,DELETE",
  credentials: true
}));

// app.set("trust proxy", 1);

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    // store: MongoStore.create({
    //   mongoUrl: process.env.MONGO_URL,
    //   collectionName: "sessions",
    // }),
    // cookie: {
    //   httpOnly: true,
    //   secure: false, // Set to true in production if using HTTPS
    //   maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds
    //   sameSite: "strict",
    // },
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(passport.initialize());
app.use(passport.session());

app.use("/user", user_route);
app.use("/adopt", adoptPost_route);
app.use("/rescue", rescue_route);


app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:3000/",
    failureRedirect: "http://localhost:3000/login",
  }),
  (req, res) => {
    res.status(200).json("login successful")
  }
);


app.get("/login/success", async (req, res) => {
  console.log("inside login/seccess");
  console.log(req.session);
  console.log(req.user);
  console.log(req.isAuthenticated());
  res.send("hi")
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
        console.log(2, logged_user);
        if (logged_user) {
          console.log(3, "user found");
          bcrypt.compare(password, logged_user.password, (err, result) => {
            if (err) {
              return cb(err);
            }
            // else {
            if (result) {
              console.log(30, "password matched")
              return cb(null, logged_user);
            } else {
              console.log(30, "password didnot match");
              return cb(null, false);
            }
            // }
          });
        } else {
          console.log(4, "user not found");
          return cb("User not found");
        }
      } catch (err) {
        console.log(5, "error in finding user");
        return cb(err);
      }
    }
  )
);



passport.use(
  "google",
  new googleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, cb) => {
      console.log(profile);
      try {
        var newuser = await User.findOne({ email: profile._json.email });

        if (!newuser) {
          newuser = new User({
            name: profile.displayName,
            email: profile._json.email,
            image: profile._json.picture,
          });
          newuser.save();
        }

        return cb(null, newuser);
      } catch (err) {
        return cb(err, null);
      }
      // console.log("profile" + JSON.stringify(profile));
      // return cb(null, profile);
    }
  )
);

// app.get("/login/success", async (req, res) => {
//   console.log("server:", req.user);
//   if(req.user){
//   res.status(200).json({
//         success: true,
//         message: "User Authenticated Successfully",
//       })
//     }
//     else{
//       res.status(401).json({
//         success: false,
//         message: "Invalid User",
//       });
//     }
// });


app.get("/", (req, res) => {
  res.send("Hello from server");
});


passport.serializeUser((user, cb) => {
  console.log(11, "serializing user" + JSON.stringify(user));
  return cb(null, user);
});

passport.deserializeUser((user, cb) => {
  console.log(12, "deserialized user" + JSON.stringify(user));
  // User.findById(id, (err, user)=>{
  return cb(null, user);

  // })
});

app.listen(5000, () => {
  console.log(`Listening on Port 5000`);
});
