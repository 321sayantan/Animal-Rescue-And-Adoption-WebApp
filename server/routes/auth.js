const express = require("express");
const User = require("../db/userModel");
const bcrypt = require("bcrypt");
const passport = require("passport");

const router = express.Router();

router.post("/register", async (req, res) => {
  const data = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  const existinguser = await User.findOne({
    $or: [{ name: data.name }, { email: data.email }],
  });
  if (existinguser) {
    res.send("This email is already taken");
  } else {
    bcrypt
      .hash(req.body.password, 10)
      .then((hashedPassword) => {
        data.password = hashedPassword;
        data
          .save()
          .then((result) => {
            res.json({ message: "User created successfully", result });
            console.log(result);
          })
          .catch((err) => {
            res.json({ message: "Error!! Try after some time" });
          });
      })
      .catch((err) => {
        res.send("Password is not hashed successfully");
      });
  }
});

router.post("/login", (req, res, next) => {
  console.log(1, "login route")
  passport.authenticate("local", (err, user) => {
    console.log(6, user);
    if (err) {
      console.log(7,"error inside route")
      res.send(err);
    }
    else if (!user) {
      res.status(200).json("Wrong Password");
    } else {
      console.log(8,"login")
      req.logIn(user, (err) => {
        console.log(9,"inside login")
        console.log(9,user)
        if (err) {
          console.log(10,"inside login error")
          return next(err);
        }
        res.status(200).json("authentication successful");
      });
    }
  })(req, res, next);
});

router.post("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      console.log(err);
    }
    res.json("logout");
  });
});

router.get("/getuser", async (req, res) => {
  try{
  console.log(20,req.headers);
  console.log(21,req.isAuthenticated());
  if (req.isAuthenticated()) {
    const users = await User.find();
    res.status(200).json(users);
  } else {
    res.status(403).json("Access denied");
  }
}
catch(err){
  res.send(err);
}
});

module.exports = router;
