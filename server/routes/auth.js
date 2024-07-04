const express = require("express");
const User = require("../db/userModel");
const bcrypt = require("bcrypt");
const passport = require("passport");
const mailTransporter = require("../utils/mailServer");
const verifyToken = require("../utils/verifyToken");
const jwt = require("jsonwebtoken");
const resetPasswordMail = require("../resources/resetPswrdMail");
const regnSuccessMail = require("../resources/regnSuccessMail");

const router = express.Router();

const sendMail = (data) => {
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
};

router.post("/register", async (req, res) => {
  const data = new User({
    name: req.body.username,
    email: req.body.email,
    password: req.body.password,
    address: req.body.address.area,
    loc: {
      type: "Point",
      coordinates: [
        req.body.address.coords.latitude,
        req.body.address.coords.longitude,
      ],
    },
    image: req.body.image,
    imageID: req.body.image_id,
    zip_code: req.body.address.zip_code,
    is_volunteer: req.body.is_volunteer === "Yes" ? true : false,
  });
  console.log("inside register route");
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
              html: regnSuccessMail(data.name),
            };

            mailTransporter.sendMail(mailDetails, function (err, data) {
              if (err) {
                console.log("Error Occurs");
              } else {
                console.log("Email sent successfully");
              }
            });

            setTimeout(() => {
              res
                .status(200)
                .json({ message: "Registration successfull", result });
            }, 1500);
            console.log(result);
          })
          .catch((err) => {
            res.status(401).json({ errors: ["Error!! Try after some time"] });
          });
      })
      .catch((err) => {
        res
          .status(401)
          .json({ errors: ["Password is not hashed successfully"] });
      });
  }
});

router.post("/login", async (req, res) => {
  try {
    const logged_user = await User.findOne({ email: req.body.email });
    // console.log(2, logged_user);
    if (logged_user) {
      // console.log(3, "user found");
      bcrypt.compare(req.body.password, logged_user.password, (err, result) => {
        if (err) {
          console.log(err);
        }
        // else {
        if (!result) {
          console.log(30, "password didnot match");
          res.status(400).json({ msg: "Invalid Email or Password" });
        }

        // console.log(30, "password matched");

        const payload = {
          id: logged_user.id,
        };

        jwt.sign(payload, "shhh", { expiresIn: "10h" }, (err, token) => {
          res.status(200).json({
            token: token,
            Message: "Login successful",
          });
        });
      });
    } else {
      console.log(4, "user not found");
      res.status(400).json({ msg: "Invalid Email or Password" });
    }
  } catch (err) {
    console.log(5, "error in finding user");
    res.status(400).json({ msg: "Unexpected Error Occured" });
  }
});

router.post("/googleLogin", async (req, res) => {
  try {
    console.log(req.body);
    let user = await User.findOne({ email: req.body.email });
    console.log(1, user);

    if (!user) {
      console.log(2, "no user");
      const data = new User({
        name: req.body.name,
        email: req.body.email,
        image: req.body.imageUrl,
        is_volunteer: false,
      });
      user = await data.save();
      // sendMail(data);
    }
    console.log(2, user);

    const payload = {
      id: user._id,
    };

    jwt.sign(payload, "shhh", { expiresIn: "10h" }, (err, token) => {
      res.status(200).json({
        token: token,
        message: "Login Successfull",
      });
    });
    console.log("logged in");
  } catch (err) {
    console.log("googleLogin failed");
    console.log(err);
  }
});

router.post("/forgot-password", async (req, res) => {
  try {
    // Find the user by email
    const user = await User.findOne({ email: req.body.email });
    console.log(user);

    // If user not found, send error message
    if (!user) {
      return res.status(404).json({ errors: ["User Not Found"] });
    }

    // Generate a unique JWT token for the user that contains the user's id
    const token = jwt.sign({ userId: user._id }, "shhh", {
      expiresIn: "10m",
    });

    const resData = { token: token };

    let mailDetails = {
      from: "AdoPet2024@gmail.com",
      to: user.email,
      // to: "123sayantandas@gmail.com",
      subject: "Reset Your Password",
      html: resetPasswordMail(resData),
    };

    mailTransporter.sendMail(mailDetails, function (err, data) {
      if (err) {
        console.log("Error Occurs");
      } else {
        console.log("Email sent successfully");
      }
    });
    res.status(200).json({ msg: "Email Sent Successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
});

router.post("/reset-password/:token", async (req, res) => {
  try {
    console.log("inside resetpassword");
    // Verify the token sent by the user
    const decodedToken = jwt.verify(req.params.token, "shhh");

    // If the token is invalid, return an error
    if (!decodedToken) {
      return res.status(401).send({ message: "Invalid token" });
    }

    // find the user with the id from the token
    const user = await User.findOne({ _id: decodedToken.userId });
    console.log(user);
    if (!user) {
      return res.status(401).send({ message: "no user found" });
    }

    // Hash the new password and update the new password
    user.password = await bcrypt.hash(req.body.newPassword, 10);
    await user.save();

    // Send success response
    console.log("password updated");
    res.status(200).send({ message: "Password updated" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
});

router.get("/validateUser", verifyToken, async (req, res) => {
  try {
    jwt.verify(req.token, "shhh", (err, data) => {
      if (!data)
        res.status(400).json({ msg: "Invalid Token", verified: false });
      else {
        res.status(200).json({ msg: "Valid Token", verified: true });
      }
    });
  } catch (err) {
    console.log(10, err);
    res.status(400).json({ msg: "Invalid Token", verified: false });
  }
});

// router.get("/getuser",verifyToken, async (req, res) => {
//   try{
//   // console.log(20,req.headers);
//   jwt.verify(req.token, "shhh", async(err, data)=>{
//     if(err){res.status(403);}
//     // console.log(data);
//     // const users = await User.find({}).sort({ createdAt: -1 }).limit(10);
//     const users = await User.find({}).sort({ timestamp: -1 }).limit(10);
//     // console.log(users)
//     res.json(users)
//   })
// }
// catch(err){
//   res.send(err);
// }
// });

module.exports = router;
