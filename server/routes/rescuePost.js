const express = require("express");
const Rescue = require("../db/RescuePost");
const User = require("../db/userModel");
const mailTransporter = require("../utils/mailServer");
const verifyToken = require("../utils/verifyToken");
const jwt = require("jsonwebtoken");
const rescueConfirmMail = require("../resources/rescueConfirmMail");
const rescueConfirmMailForDonor = require("../resources/rescueConfirmMailForDonor");

const router = express.Router();

router.post("/post", async (req, res) => {
  const data = new Rescue({
    rescuer_name: req.body.rescuer_name,
    rescuer_phone: req.body.rescuer_mob,
    address: req.body.loc_of_found.area,
    lat: req.body.loc_of_found.coords.latitude,
    lng: req.body.loc_of_found.coords.longitude,
    zip_code: req.body.loc_of_found.zip_code,
    vet_category: req.body.vet_category,
    images: req.body.images,
    vet_gender: req.body.gender,
    description: req.body.description,
    vet_health_status: req.body.health_status,
  });
  // console.log(users)
  data
    .save()
    .then(async (result) => {
      // console.log(1,result);

      const nearbyvolunteer = await User.find({
        loc: {
          $near: {
            $geometry: {
              type: "Point",
              coordinates: [result.lat, result.lng],
            },
            $maxDistance: 25000,
          },
        },
      });
      // console.log(nearbyvolunteer)
      
      nearbyvolunteer.map((vol)=>{
        // console.log(result.id, vol.name)
        let mailDetails = {
          from: "AdoPet2024@gmail.com",
          to: vol.email,
          subject: "Request for Animal Rescue: Injured Animal in Your Locality",
          html: rescueNotifyMail({ id: result.id, name: vol.name }),
        };

        mailTransporter.sendMail(mailDetails, function (err, data) {
          if (err) {
            console.log("Error Occurs");
          } else {
            console.log("Email sent successfully");
          }
        });
      })


      res.status(200).json({ message: "Post added successfully" });
    })
    .catch((err) => {
      res.status(500).json({ errors: err });
    });
});

// router.post("/test", async (req, res) => {
//   console.log("inside test");
//   // const nearbyvolunteer = await User.find({
//   //   loc: {
//   //     $near: {
//   //       $geometry: {
//   //         type: "Point",
//   //         coordinates: [22.90039, 88.396459999999],
//   //       },
//   //       $maxDistance: 5000,
//   //     },
//   //   },
//   // });
//   // console.log(nearbyvolunteer);
//   // res.send(nearbyvolunteer);

//   let mailDetails = {
//     from: "AdoPet2024@gmail.com",
//     // to: recieverEmail,
//     // to: "dsnehodipto@gmail.com",
//     to: "123sayantandas@gmail.com",
//     subject: "rescueConfirmMail",
//     html: rescueNotifyMail(),
//   };

//   mailTransporter.sendMail(mailDetails, function (err, data) {
//     if (err) {
//       console.log("Error Occurs");
//     } else {
//       console.log("Email sent successfully");
//     }
//   });
// });

// get all rescue posts


router.get("/getallrescues", async (req, res, next) => {
  try {
    const allposts = await Rescue.find();
    setTimeout(() => {
      res.status(200).json(allposts);
    }, 3000);
  } catch (error) {
    res.status(400).json(error);
  }
});

// get rescue animal by id
router.get("/getrescue/:id", async (req, res, next) => {
  try {
    const rescuePost = await Rescue.findOne({ _id: req.params.id });
    setTimeout(() => {
      res.status(200).json(rescuePost);
    }, 3000);
  } catch (error) {
    res.status(400).json(error);
  }
});

//filter rescue query by address
router.get("/filter", async (req, res, next) => {
  try {
    const query = req.query.search;
    let posts = await Rescue.find({
      address: { $regex: `${query}`, $options: "i" },
    });
    setTimeout(() => {
      res.status(200).json(posts);
    }, 3000);
  } catch (error) {
    next(error);
  }
});

router.post("/rescueRequest", verifyToken, (req, res) => {
  try {
    jwt.verify(req.token, "shhh", async (err, data) => {
      
      if (err) {
        res.status(403);
      }
      console.log(1, req.body);

      const currentUser = await User.findOne({ _id: data.id });
      console.log(11, currentUser);

      var resData = await Post.findOne({ _id: req.body.id });
      const recieverEmail = resData.donor_email;

      resData = {
        ...resData,
        dtOfApntmnt: req.body.selDate,
        currentuser: currentUser.name,
      };
      console.log(resData);

      //Mail goes to Sender
      let mailDetails = {
        from: "AdoPet2024@gmail.com",
        to: recieverEmail,
        // to: "dsnehodipto@gmail.com",
        // to: "123sayantandas@gmail.com",
        subject: "Request for adoption",
        html: rescueConfirmMail(resData),
      };

      mailTransporter.sendMail(mailDetails, function (err, data) {
        if (err) {
          console.log("Error Occurs");
        } else {
          console.log("Email sent successfully");
        }
      });

      //Mail goes to donor
      mailDetails = {
        from: "AdoPet2024@gmail.com",
        to: recieverEmail,
        // to: "dsnehodipto@gmail.com",
        // to: "123sayantandas@gmail.com",
        subject: "Request for adoption",
        html: rescueConfirmMailForDonor(resData),
      };

      mailTransporter.sendMail(mailDetails, function (err, data) {
        if (err) {
          console.log("Error Occurs");
        } else {
          console.log("Email sent successfully");
        }
      });
      setTimeout(() => {
        res.status(200).json({ message: "Mail sent successfully" });
      }, 10);
    });
  } catch (error) {
    console.log(13, error);
    res.status(402).json(error);
  }
});

module.exports = router;
