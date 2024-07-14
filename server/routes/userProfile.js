const express = require("express");
const User = require("../db/userModel");
const adoptPost = require("../db/AdoptPost");
const Rescue = require("../db/RescuePost");
const verifyToken = require("../utils/verifyToken");
const jwt = require("jsonwebtoken");
const cloudinary = require("cloudinary");
const env = require("dotenv");

env.config();

const router = express.Router();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

router.get("/getuser", verifyToken, (req, res) => {
  try {
    jwt.verify(req.token, "shhh", async (err, dataa) => {
      if (dataa === undefined) {
        console.log("token expired");
        res.status(200).json({ message: "Login Session Expired" });
      } else {
        if (err) {
          res.status(403);
        }
        // console.log(dataa);
        const user = await User.findOne({ _id: dataa.id });
        if (!user) {
          console.log("user not found");
          res.status(400).json("Invalid User");
        } else {
          // console.log(user);

          const alladoptPosts = await adoptPost.find({
            donor_email: user.email,
          });
          // console.log(alladoptPosts)

          const allRescuePosts = await Rescue.find({
            rescuer_email: user.email,
          });

          res.status(200).json({ user: user, adopt: alladoptPosts, rescue: allRescuePosts });
        }
      }
    });
  } catch (err) {
    // console.log(err);
    res.status(400).json("User Not Found");
  }
});

router.patch("/edit", verifyToken, (req, res) => {
  try {
    jwt.verify(req.token, "shhh", async (err, dataa) => {
      if (dataa === undefined) {
        res.status(200).json({ message: "Login Session Expired" });
        console.log("token expired");
      } else {
        if (err) {
          res.status(403);
        }

        const user = await User.findOne({ _id: dataa.id });
        if (!user) {
          console.log("user not found");
          res.status(400).json("Invalid User");
        }
        // console.log(user.loc);
        console.log(req.body);

        const lat =
          req.body.address.coords === undefined
            ? user.loc === undefined
              ? 0.0
              : undefined
            : req.body.address.coords.latitude;

        console.log(lat);

        const long =
          req.body.address.coords == undefined
            ? user.loc === undefined
              ? 0.0
              : undefined
            : req.body.address.coords.longitude;

        const data = {
          name: req.body.username,
          email: req.body.email,
          address: req.body.address.area,
          loc: {
            type: "Point",
            coordinates: [lat, long],
          },
          zip_code: req.body.address.zip_code,
          is_volunteer: req.body.is_volunteer === "Yes" ? true : false,
        };

        const result = await User.findByIdAndUpdate({ _id: user._id }, data);
        console.log(result);

        res.status(200).json({ message: "Profile Updated Successfully" });
      }
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.post("/updateProfilePic", verifyToken, async(req,res)=>{
  try {
    jwt.verify(req.token, "shhh", async (err, dataa) => {
      if (dataa === undefined) {
        res.status(200).json({ message: "Login Session Expired" });
        console.log("token expired");
      } else {
        if (err) {
          res.status(403);
        }

        const user = await User.findOne({ _id: dataa.id });
        if (!user) {
          console.log("user not found");
          res.status(400).json("Invalid User");
        }

        console.log(req.body);
        console.log(user);

        const image_id = user.imageID;

        // try {
        //   cloudinary.v2.uploader.destroy(image_id).then((result) => {
        //     if (result) {
        //       console.log(result);
        //       console.log("image deleted from cloudinary");
        //       //return res.status(201).json({message:'Image Deleted From Cloudinary'});
        //     }
        //   });
        // } catch (error) {
        //   console.log(error);
        //   return res.send({ error: "error" });
        // }

        
        // const result = await User.findByIdAndUpdate({ _id: user._id }, data);
        // console.log(result);

        res.status(200).json({ message: "Profile Updated Successfully" });
      }
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
})

router.delete("/deleteUser", verifyToken, (req, res) => {
  try {
    jwt.verify(req.token, "shhh", async (err, dataa) => {
      if (dataa === undefined) {
        res.status(200).json({ message: "Login Session Expired" });
      } else {
        if (err) {
          res.status(403);
        }
        const user = await User.findOne({ _id: dataa.id });
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
        const post = await adoptPost.findOne({ _id: id });
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
              // console.log("image deleted from cloudinary");
            }
          });
        } catch (error) {
          console.log(error);
          return res.send({ error: "error" });
        }

        const result = await adoptPost.findByIdAndDelete(post._id);
        // console.log(result);
        setTimeout(() => {
          res.status(200).json({ msg: "Post deleted successfully" });
        }, 500);
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
        const post = await Rescue.findOne({ _id: id });
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
              // console.log("image deleted from cloudinary");
            }
          });
        } catch (error) {
          console.log(error);
          return res.send({ error: "error" });
        }

        const result = await Rescue.findByIdAndDelete(post._id);
        // console.log(result);
        setTimeout(() => {
          res.status(200).json({ msg: "Post deleted successfully" });
        }, 500);
      }
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
