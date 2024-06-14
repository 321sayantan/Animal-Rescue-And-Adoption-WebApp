const express = require("express");
const Post = require("../db/AdoptPost");
const nodemailer = require("nodemailer");
const mailTransporter = require("../utils/mailServer");

const router = express.Router();

router.post("/post", async (req, res) => {
  const data = new Post({
    donor_name: req.body.donor.donor_name,
    donor_phone: req.body.donor.phone,
    address: req.body.donor.address.area,
    lat: req.body.donor.address.coords.latitude,
    lng: req.body.donor.address.coords.longitude,
    zip_code: req.body.donor.address.zip_code,
    vet_name: req.body.vet.pet_name,
    vet_category: req.body.vet.category,
    vet_breed: req.body.vet.breed,
    image: req.body.vet.image,
    image_id: req.body.vet.image_id,
    is_vaccinated: req.body.vet.is_vaccinated,
    vet_description: req.body.vet.description,
  });
  data
    .save()
    .then((result) => {
      res.status(200).json({ message: "Post added successfully" });
    })
    .catch((err) => {
      res.status(500).json({ errors: err });
    });
  // console.log(data)
});

router.get("/getallpost", async (req, res) => {
  try {
    const allposts = await Post.find();
    setTimeout(() => {
      res.status(200).json(allposts);
    }, 3000);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.get("/getpost/:id", async (req, res) => {
  try {
    const posts = await Post.findOne({ _id: req.params.id });
    setTimeout(() => {
      res.status(200).json(posts);
    }, 3000);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.get("/filter", async (req, res, next) => {
  try {
    const query = req.query.search;
    let posts = await Post.find({ address: { $regex: query, $options: "i" } });
    setTimeout(() => {
      res.status(200).json(posts);
    }, 3000);
  } catch (error) {
    next(error);
  }
});

router.get("/adoptionRequest", (req, res) => {
  // let mailDetails = {
  // from: "AdoPet2024@gmail.com",
  // to: "123sayantandas@gmail.com",
  // subject: "Request for Adoption",
  // text: "I want to adopt your pet dog",
  // };

  // mailTransporter.sendMail(mailDetails, function (err, data) {
  // if (err) {
  //     console.log("Error Occurs");
  // } else {
  //     console.log("Email sent successfully");
  // }
  // });

  let mailDetails = {
    from: "AdoPet2024@gmail.com",
    // to: data.email,
    to: "dsnehodipto@gmail.com",
    // to: "123sayantandas@gmail.com",
    subject: "Welcome to Adopet! Your Registration is Complete! 🐾",
    html:`<H1>Test Mail</H1>`
    // html: `Hi <strong>Snehodipto Das</strong>, <br><br>
    //     Welcome to  <strong>Adopet</strong>! Your registration is successful. 🎉 <br><br>
    //     Start exploring adoptable pets <a href="http:localhost:3000">here</a>. If you need help, contact us at AdoPet2024@gmail.com.
    //     <br><br>
    //     Happy adopting and rescue!
    //     <br><br>
    //     Best,<br>
    //     The Adopet Team`,
  };

  mailTransporter.sendMail(mailDetails, function (err, data) {
    if (err) {
      console.log("Error Occurs");
    } else {
      console.log("Email sent successfully");
    }
  });
  res.json("mail send")

});

module.exports = router;
