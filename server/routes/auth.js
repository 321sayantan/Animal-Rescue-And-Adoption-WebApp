const express = require("express");
const User = require("../db/userModel");
const bcrypt = require("bcrypt");
const passport = require("passport");
const mailTransporter = require("../utils/mailServer");

const router = express.Router();

router.post("/register", async (req, res) => {
  const data = new User({
    name: req.body.username,
    email: req.body.email,
    password: req.body.password,
    area: req.body.address.area,
    lat: req.body.address.coords.latitude,
    lng: req.body.address.coords.longitude,
    zip_code: req.body.address.zip_code,
    is_volunteer: req.body.is_volunteer === 'Yes' ? true : false
  });
  console.log("inside register route")
  const existinguser = await User.findOne({ email: data.email });
  if (existinguser) {
    res.status(401).json({ errors: ["This email is already taken"] });
  } else {
    bcrypt
      .hash(req.body.password, 10)
      .then((hashedPassword) => {
        data.password = hashedPassword;
        data
          .save()
          .then((result) => {

            let mailDetails = {
              from: "AdoPet2024@gmail.com",
              to: data.email,
              // to: "123sayantandas@gmail.com",
              subject: "Welcome to Adopet! Your Registration is Complete! 🐾",
              html: `Hi ${data.name}, <br><br>
                    Welcome to Adopet! Your registration is successful. 🎉 <br><br>
                    Start exploring adoptable pets <a href="http:localhost:3000">here</a>. If you need help, contact us at AdoPet2024@gmail.com.
                    <br><br>
                    Happy adopting and rescue!
                    <br><br>
                    Best,<br>
                    The Adopet Team`,
            };

            mailTransporter.sendMail(mailDetails, function (err, data) {
              if (err) {
                console.log("Error Occurs");
              } else {
                console.log("Email sent successfully");
              }
            });

            res.status(200).json({ message: "User registered successfully", result });
            console.log(result);
          })
          .catch((err) => {
            res.status(401).json({ errors: ["Error!! Try after some time"] });
          });
      })
      .catch((err) => {
        res.status(401).json({ errors: ["Password is not hashed successfully"] });
      });
  }
});

// router.post("/login", (req, res, next) => {
//   console.log(1, "login route")
//   passport.authenticate("local", (err, user) => {
//     console.log(6, user);
//     if(err) {
//       console.log(7,"error inside route")
//       res.status(401).json({ errors: [err] });
//     }
//     else if (!user) {
//       res.status(401).json({ errors:["Wrong Password"]});
//     } else {
//       console.log(8,"login")

//       req.logIn(user, (err) => {
//         console.log(9,"inside login")
//         console.log(9,user)
//         if (err) {
//           console.log(10,"inside login error")
//           return next(err);
//         }

//         // res.cookie("sayantan", "sdkfhskfhksf")
//         console.log(req.session)
//         console.log(req.user)

//         res.status(200).json("authentication successful");
//       });
//     }
//   })(req, res, next);
// });



router.post("/login", passport.authenticate("local"), (req, res) => {
  res.status(200).json({ message: "Login successful" });
});


router.get("/logout", (req, res) => {
  console.log("inside logout function")
  req.logout((err) => {
    if (err) {
      console.log(err);
    }
    res.json("logout");
  });
});

router.get("/getuser", async (req, res) => {
  try {
    console.log(20, req.headers);
    console.log(21, req.isAuthenticated());
    if (req.isAuthenticated()) {
      const users = await User.find();
      res.status(200).json(users);
    } else {
      res.status(403).json("Access denied");
    }
  }
  catch (err) {
    res.send(err);
  }
});

module.exports = router;
