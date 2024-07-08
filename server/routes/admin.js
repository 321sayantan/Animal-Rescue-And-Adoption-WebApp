const express = require("express");
const verifyToken = require("../utils/verifyToken");
const jwt = require("jsonwebtoken");
const Rescue = require("../db/RescuePost");
const User = require("../db/userModel");
const Admin = require("../db/adminModel");
const bcrypt = require("bcrypt");
const AdoptPost = require("../db/AdoptPost");
const RescuePost = require("../db/RescuePost");
const cloudinary = require("cloudinary");
const env = require("dotenv");

env.config();

const router = express.Router();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

router.post("/register", async (req, res) => {
  const data = new Admin({
    username: req.body.username,
    password: req.body.password,
  });
  console.log("inside register route");
  const existinguser = await Admin.findOne({ username: data.username });
  if (existinguser) {
    res.status(401).json({ errors: ["This username is already taken"] });
  } else {
    bcrypt
      .hash(req.body.password, 10)
      .then((hashedPassword) => {
        data.password = hashedPassword;
        data
          .save()
          .then((result) => {
            // setTimeout(() => {
            res
              .status(200)
              .json({ message: "Registered successful as Admin", result });
            // }, 1500);
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
    const logged_user = await Admin.findOne({ username: req.body.username });
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
          res.status(400).json({ msg: "Invalid Username or Password" });
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
      res.status(400).json({ msg: "Invalid Username or Password" });
    }
  } catch (err) {
    console.log(5, "error in finding user");
    res.status(400).json({ msg: "Unexpected Error Occured" });
  }
});

router.get("/dashboard", verifyToken, (req, res) => {
  try {
    jwt.verify(req.token, "shhh", async (err, data) => {
      if (data == undefined) {
        console.log("token expired");
        res.status(200).json({ message: "Login Session Expired" });
      } else {
        if (err) {
          console.log(err);
        }

        // const admin = await Admin.findOne({ _id: data.id });
        const total_users = await User.find({ is_volunteer: false }).count();
        const total_volunteers = await User.find({
          is_volunteer: true,
        }).count();
        const total_Adopt_Post = await AdoptPost.find().count();
        const total_Rescue_Post = await RescuePost.find().count();
        const adopt_list = await AdoptPost.find()
          .sort({ timestamp: -1 })
          .limit(10);
        const rescue_list = await RescuePost.find()
          .sort({ timestamp: -1 })
          .limit(10);

        setTimeout(() => {
          res.status(200).json({
            total_user: total_users,
            total_volunteers: total_volunteers,
            total_Adopt_Post: total_Adopt_Post,
            total_Rescue_Post: total_Rescue_Post,
            adopt_list: adopt_list,
            rescue_list: rescue_list,
          });
        }, 2500)
      }
    });
  } catch (err) {
    console.log(err);
    res.status(400).json("Unexpected error occured");
  }
});

router.get("/allUser", verifyToken, (req, res) => {
  try {
    jwt.verify(req.token, "shhh", async (err, data) => {
      if (data == undefined) {
        console.log("token expired");
        res.status(200).json({ message: "Login Session Expired" });
      } else {
        if (err) {
          console.log(err);
        }

        const allUser = await User.find().sort({ timestamp: -1 });
        res.status(200).json({ allUser: allUser });
      }
    });
  } catch (err) {
    console.log(err);
    res.status(400).json("Unexpected Error Occured");
  }
});

router.get("/allAdoptPost", verifyToken, async (req, res) => {
  try {
    jwt.verify(req.token, "shhh", async (err, data) => {
      if (data == undefined) {
        console.log("token expired");
        res.status(200).json({ message: "Login Session Expired" });
      } else {
        if (err) {
          console.log(err);
        }

        const allAdoptPost = await AdoptPost.find().sort({ timestamp: -1 });
        res.status(200).json({ allAdoptPost: allAdoptPost });
      }
    });
  } catch (err) {
    console.log(err);
    res.status(400).json("Unexpected Error Occured");
  }
});

router.get("/allRescuePost", verifyToken, async (req, res) => {
  try {
    jwt.verify(req.token, "shhh", async (err, data) => {
      if (data == undefined) {
        console.log("token expired");
        res.status(200).json({ message: "Login Session Expired" });
      } else {
        if (err) {
          console.log(err);
        }

        const allRescuePost = await RescuePost.find().sort({ timestamp: -1 });
        res.status(200).json({ allRescuePost: allRescuePost });
      }
    });
  } catch (err) {
    console.log(err);
    res.status(400).json("Unexpected Error Occured");
  }
});

router.delete("/deleteUser/:id", verifyToken, (req, res) => {
  try {
    jwt.verify(req.token, "shhh", async (err, dataa) => {
      if (dataa === undefined) {
        res.status(200).json({ message: "Login Session Expired" });
      } else {
        if (err) {
          res.status(403);
        }
        const user = await User.findOne({ _id: req.params.id });
        if (!user) {
          console.log("user not found");
          res.status(400).json("Invalid User");
        }
        // console.log(user);
        const image_id = user.imageID;

        try {
          cloudinary.v2.uploader.destroy(image_id).then((result) => {
            if (result) {
              console.log(result);
              console.log("image deleted from cloudinary");
              //return res.status(201).json({message:'Image Deleted From Cloudinary'});
            }
          });
        } catch (error) {
          console.log(error);
          return res.send({ error: "error" });
        }

        const data = await User.findByIdAndDelete(user._id);
        console.log(data);
        // setTimeout(() => {
        res.status(200).json({ msg: "Account deleted successfully" });
        // }, 500);
      }
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.delete("/deleteAdoptPost/:id", verifyToken, async (req, res) => {
  try {
    jwt.verify(req.token, "shhh", async (err, dataa) => {
      if (dataa === undefined) {
        res.status(200).json({ message: "Login Session Expired" });
      } else {
        if (err) {
          res.status(403);
        }

        const id = req.params.id;
        const post = await AdoptPost.findOne({ _id: id });
        if (!post) {
          console.log("Post Not Found");
          res.status(400).json("Post Not Found");
        }
        console.log(post);

        const image_id = post.image_id;

        try {
          cloudinary.v2.uploader.destroy(image_id).then((result) => {
            if (result) {
              // console.log(result);
              console.log("image deleted from cloudinary");
            }
          });
        } catch (error) {
          console.log(error);
          return res.send({ error: "error" });
        }

        const result = await AdoptPost.findByIdAndDelete(post._id);
        // console.log(result);
        res.status(200).json({ msg: "Post deleted successfully" });
        // setTimeout(() => {
        // }, 500);
      }
    });
  } catch (err) {
    console.log(err);
  }
});

router.delete("/deleteRescuePost/:id", verifyToken, async (req, res) => {
  try {
    jwt.verify(req.token, "shhh", async (err, dataa) => {
      if (dataa === undefined) {
        res.status(200).json({ message: "Login Session Expired" });
      } else {
        if (err) {
          res.status(403);
        }

        const id = req.params.id;
        const post = await RescuePost.findOne({ _id: id });
        if (!post) {
          console.log("Post Not Found");
          res.status(400).json("Post Not Found");
        } else {
          try {
            post.images.map((data) => {
              cloudinary.v2.uploader.destroy(data.image_id).then((result) => {
                if (result) {
                  // console.log(result);
                  console.log("image deleted from cloudinary");
                }
              });
            });
          } catch (error) {
            console.log(error);
            return res.send({ error: "error" });
          }

          const result = await RescuePost.findByIdAndDelete(post._id);
          // console.log(result);
          res.status(200).json({ msg: "Post deleted successfully" });
          // setTimeout(() => {
          // }, 500);
        }
      }
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
