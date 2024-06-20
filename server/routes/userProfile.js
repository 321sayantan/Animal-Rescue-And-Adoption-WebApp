const express = require("express");
const User = require("../db/userModel");
const adoptPost = require("../db/AdoptPost");
const verifyToken = require("../utils/verifyToken");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.get("/getuser", verifyToken, (req, res) => {
  try {
    jwt.verify(req.token, "shhh", async (err, dataa) => {
      if (err) {
        res.status(403);
      }
      const user = await User.findOne({ _id: dataa.id });
      if (!user) {
        console.log("user not found");
        res.status(400).json("Invalid User");
      }
      // console.log(user);

      const alladoptPosts = await adoptPost.find({ donor_email: user.email });
      console.log(alladoptPosts)

      res.status(200).json({user: user, adopt: alladoptPosts});
    });
  } catch (err) {
    console.log(err);
    res.status(400).json("User Not Found")
  }
});

router.patch("/edit", verifyToken, (req, res) => {
  try {
    jwt.verify(req.token, "shhh", async (err, dataa) => {
      if (err) {
        res.status(403);
      }

      const user = await User.findOne({ _id: dataa.id });
      if (!user) {
        console.log("user not found");
        res.status(400).json("Invalid User");
      }
      console.log(user);

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

      const result = await User.findByIdAndUpdate({ _id: user._id }, data);
      console.log(result);

      res.send(result);
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

module.exports = router;
