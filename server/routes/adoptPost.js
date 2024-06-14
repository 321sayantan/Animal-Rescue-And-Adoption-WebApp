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
      setTimeout(() => {
        res.status(200).json({ message: "Post added successfully" });
      }, 1500)
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
    to: "crossorigenes@gmail.com",
    // to: "123sayantandas@gmail.com",
    subject: "Welcome to Adopet! Your Registration is Complete! 🐾",
    html: `<b>Test successful</b>`
    // html: `<div dir="ltr" class="es-wrapper-color">
    //     <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0">
    //         <tbody>
    //             <tr>
    //                 <td class="esd-email-paddings" valign="top">
    //                     <table class="es-content" cellspacing="0" cellpadding="0" align="center">
    //                         <tbody>
    //                             <tr>
    //                                 <td class="esd-stripe" align="center">
    //                                     <table class="es-content-body" width="600" cellspacing="0" cellpadding="0"
    //                                         bgcolor="#ffffff" align="center">
    //                                         <tbody>
    //                                             <tr>
    //                                                 <td class="es-p20t es-p20r es-p20l esd-structure" align="left">
    //                                                     <table width="100%" cellspacing="0" cellpadding="0">
    //                                                         <tbody>
    //                                                             <tr>
    //                                                                 <td class="esd-container-frame" width="560"
    //                                                                     valign="top" align="center">
    //                                                                     <table width="100%" cellspacing="0"
    //                                                                         cellpadding="0">
    //                                                                         <tbody>
    //                                                                             <tr>
    //                                                                                 <td align="left"
    //                                                                                     class="esd-block-text">
    //                                                                                     <h1
    //                                                                                         style="font-family:&#39;noticia text&#39;,georgia,&#39;times new roman&#39;,serif;color:#6133cf">
    //                                                                                         Hello, <span
    //                                                                                             style="color:#f0da1f">Owner</span>...
    //                                                                                     </h1>
    //                                                                                 </td>
    //                                                                             </tr>
    //                                                                         </tbody>
    //                                                                     </table>
    //                                                                 </td>
    //                                                             </tr>
    //                                                         </tbody>
    //                                                     </table>
    //                                                 </td>
    //                                             </tr>
    //                                         </tbody>
    //                                     </table>
    //                                 </td>
    //                             </tr>
    //                         </tbody>
    //                     </table>
    //                     <table class="es-content" cellspacing="0" cellpadding="0" align="center">
    //                         <tbody>
    //                             <tr>
    //                                 <td class="esd-stripe" align="center" bgcolor="transparent">
    //                                     <table class="es-content-body" width="600" cellpadding="0" cellspacing="0"
    //                                         bgcolor="#ffffff" align="center">

    //                                         <tbody>
    //                                             <tr>
    //                                                 <td class="esd-structure es-p20t es-p20r es-p20l" align="left">
    //                                                     <table cellpadding="0" cellspacing="0">

    //                                                         <tbody>
    //                                                             <tr>

    //                                                                 <td width="560" class="esd-container-frame"
    //                                                                     align="left">
    //                                                                     <table cellpadding="0" cellspacing="0"
    //                                                                         width="100%" role="presentation">
    //                                                                         <tbody>
    //                                                                             <tr>
    //                                                                                 <td align="left"
    //                                                                                     class="esd-block-text es-text-4414">
    //                                                                                     <p align="justify"
    //                                                                                         style="line-height:150% !important;font-family:arvo,courier,georgia,serif;font-size:16px;color:#373131">
    //                                                                                         I'm interested in adopting
    //                                                                                         this underprovided pet
    //                                                                                         donated by you. I'm aware of
    //                                                                                         all terms and conditions
    //                                                                                         mentioned by you and is
    //                                                                                         satisfied with your terms
    //                                                                                         and agreements.</p>
    //                                                                                 </td>
    //                                                                             </tr>
    //                                                                         </tbody>
    //                                                                     </table>
    //                                                                 </td>


    //                                                             </tr>

    //                                                         </tbody>
    //                                                     </table>
    //                                                 </td>
    //                                             </tr>

    //                                         </tbody>
    //                                     </table>
    //                                 </td>
    //                             </tr>
    //                         </tbody>
    //                     </table>
    //                     <table class="esd-header-popover es-header" cellspacing="0" cellpadding="0" align="center">
    //                         <tbody>
    //                             <tr>
    //                                 <td class="esd-stripe" align="center">
    //                                     <table class="es-header-body" width="600" cellspacing="0" cellpadding="0"
    //                                         bgcolor="#ffffff" align="center">
    //                                         <tbody>
    //                                             <tr>
    //                                                 <td class="es-p20r es-p20l esd-structure es-p15t es-p15b"
    //                                                     align="left">
    //                                                     <table class="es-left" cellspacing="0" cellpadding="0"
    //                                                         align="left">
    //                                                         <tbody>
    //                                                             <tr>
    //                                                                 <td width="181" class="esd-container-frame"
    //                                                                     align="left">
    //                                                                     <table cellpadding="0" cellspacing="0"
    //                                                                         width="100%" role="presentation">
    //                                                                         <tbody>
    //                                                                             <tr>
    //                                                                                 <td align="center"
    //                                                                                     class="esd-block-image es-p10"
    //                                                                                     style="font-size: 0">
    //                                                                                     <a target="_blank">
    //                                                                                         <img src="https://eiyxhgv.stripocdn.email/content/guids/CABINET_8f489d4acfc094e519b9d5c4f7f4a5ba6f273acca4a7b9279cecf11612944423/images/about2.jpg"
    //                                                                                             alt="" width="161"
    //                                                                                             class="adapt-img"
    //                                                                                             style="border-radius:5px">
    //                                                                                     </a>
    //                                                                                 </td>
    //                                                                             </tr>
    //                                                                         </tbody>
    //                                                                     </table>
    //                                                                 </td>
    //                                                             </tr>
    //                                                         </tbody>
    //                                                     </table>
    //                                                     <table class="es-right" cellspacing="0" cellpadding="0"
    //                                                         align="right">
    //                                                         <tbody>
    //                                                             <tr>
    //                                                                 <td class="esd-container-frame" width="359"
    //                                                                     align="left">
    //                                                                     <table width="100%" cellspacing="0"
    //                                                                         cellpadding="0">
    //                                                                         <tbody>
    //                                                                             <tr>
    //                                                                                 <td align="left"
    //                                                                                     class="esd-block-text es-text-1226 es-p20">
    //                                                                                     <ul
    //                                                                                         style="list-style-type:square">
    //                                                                                         <li
    //                                                                                             style="font-family:arvo,courier,georgia,serif;font-size:16px;line-height:150%">
    //                                                                                             <p
    //                                                                                                 style="font-family:arvo,courier,georgia,serif;font-size:16px;line-height:150%">
    //                                                                                                 <strong
    //                                                                                                     style="color:#5b1fa3">Name:</strong>
    //                                                                                                 <span
    //                                                                                                     style="color:#f6a441">Jenny</span>
    //                                                                                             </p>
    //                                                                                         </li>
    //                                                                                         <li
    //                                                                                             style="font-family:arvo,courier,georgia,serif;font-size:16px;line-height:150%">
    //                                                                                             <p
    //                                                                                                 style="font-family:arvo,courier,georgia,serif;font-size:16px;line-height:150%">
    //                                                                                                 <strong><span
    //                                                                                                         style="color:#5b1fa3">Breed</span>:</strong>
    //                                                                                                 <span
    //                                                                                                     style="color:#f6a441">Spaniel</span>
    //                                                                                             </p>
    //                                                                                         </li>
    //                                                                                         <li
    //                                                                                             style="font-family:arvo,courier,georgia,serif;font-size:16px;line-height:150%">
    //                                                                                             <p
    //                                                                                                 style="font-family:arvo,courier,georgia,serif;font-size:16px;line-height:150%">
    //                                                                                                 <strong><span
    //                                                                                                         style="color:#5b1fa3">Category</span>:</strong>
    //                                                                                                 <span
    //                                                                                                     style="color:#f6a441">Dog</span>
    //                                                                                             </p>
    //                                                                                         </li>
    //                                                                                     </ul>
    //                                                                                 </td>
    //                                                                             </tr>
    //                                                                         </tbody>
    //                                                                     </table>
    //                                                                 </td>
    //                                                             </tr>
    //                                                         </tbody>
    //                                                 </td>
    //                                             </tr>
    //                                         </tbody>
    //                                     </table>
    //                                 </td>
    //                             </tr>
    //                         </tbody>
    //                     </table>
    //                     <table class="es-content" cellspacing="0" cellpadding="0" align="center">
    //                         <tbody>
    //                             <tr>
    //                                 <td class="esd-stripe" align="center" bgcolor="transparent">
    //                                     <table class="es-content-body" width="600" cellpadding="0" cellspacing="0"
    //                                         bgcolor="#ffffff" align="center">

    //                                         <tbody>
    //                                             <tr>
    //                                                 <td class="esd-structure es-p20r es-p20l" align="left">
    //                                                     <table cellpadding="0" cellspacing="0">

    //                                                         <tbody>
    //                                                             <tr>

    //                                                                 <td width="560" class="esd-container-frame"
    //                                                                     align="left">
    //                                                                     <table cellpadding="0" cellspacing="0"
    //                                                                         width="100%" role="presentation">
    //                                                                         <tbody>
    //                                                                             <tr>
    //                                                                                 <td align="left"
    //                                                                                     class="esd-block-text es-text-5616">
    //                                                                                     <p
    //                                                                                         style="line-height:150% !important;font-family:arvo,courier,georgia,serif;font-size:16px">
    //                                                                                         I am willing to fix an
    //                                                                                         appointment with you on
    //                                                                                         <strong
    //                                                                                             style="color:#3d85c6">27-06-2024</strong>
    //                                                                                         if you are okay with it.
    //                                                                                         Please inform me about our
    //                                                                                         deal by accepting this
    //                                                                                         request.
    //                                                                                     </p>
    //                                                                                     <p
    //                                                                                         style="line-height:150% !important;font-family:arvo,courier,georgia,serif;font-size:16px">
    //                                                                                         ​</p>
    //                                                                                     <p
    //                                                                                         style="line-height:150% !important;font-family:arvo,courier,georgia,serif;font-size:16px">
    //                                                                                         ​</p>
    //                                                                                     <p style="line-height:150% !important;font-family:arvo,courier,georgia,serif;font-size:14px"
    //                                                                                         class="es-text-mobile-size-14">
    //                                                                                         with regards,</p>
    //                                                                                     <p
    //                                                                                         style="line-height:150% !important;font-family:arvo,courier,georgia,serif;font-size:16px">
    //                                                                                         <strong>Ajay Bose</strong>
    //                                                                                     </p>
    //                                                                                 </td>
    //                                                                             </tr>
    //                                                                         </tbody>
    //                                                                     </table>
    //                                                                 </td>


    //                                                             </tr>

    //                                                         </tbody>
    //                                                     </table>
    //                                                 </td>
    //                                             </tr>

    //                                         </tbody>
    //                                     </table>
    //                                 </td>
    //                             </tr>
    //                         </tbody>
    //                     </table>
    //                     <table class="esd-footer-popover es-footer" cellspacing="0" cellpadding="0" align="center">
    //                         <tbody>
    //                             <tr>
    //                                 <td class="esd-stripe" align="center">
    //                                     <table class="es-footer-body" width="600" cellspacing="0" cellpadding="0"
    //                                         bgcolor="#ffffff" align="center">
    //                                         <tbody>
    //                                             <tr>
    //                                                 <td class="esd-structure es-p20r es-p20b es-p20l es-p50t"
    //                                                     align="left">
    //                                                     <table class="es-left" cellspacing="0" cellpadding="0"
    //                                                         align="left">
    //                                                         <tbody>
    //                                                             <tr>
    //                                                                 <td class="es-m-p20b esd-container-frame"
    //                                                                     width="270" align="left">
    //                                                                     <table width="100%" cellspacing="0"
    //                                                                         cellpadding="0">
    //                                                                         <tbody>
    //                                                                             <tr>
    //                                                                                 <td align="center"
    //                                                                                     class="esd-block-button h-auto"
    //                                                                                     height="46">
    //                                                                                     <span
    //                                                                                         class="es-button-border es-fw"
    //                                                                                         style="background:#ea9999;border-width:3px;border-style:solid;border-color:#cc0000">
    //                                                                                         <a href=""
    //                                                                                             class="es-button es-button-9691"
    //                                                                                             target="_blank"
    //                                                                                             style="padding:10px 95px;background:#ea9999;mso-border-alt:10px solid #ea9999;color:#ffffff;font-weight:bold;font-family:verdana,geneva,sans-serif;font-size:18px">Reject</a>
    //                                                                                     </span>
    //                                                                                 </td>
    //                                                                             </tr>
    //                                                                         </tbody>
    //                                                                     </table>
    //                                                                 </td>
    //                                                             </tr>
    //                                                         </tbody>
    //                                                     </table>
    //                                                     <table class="es-right" cellspacing="0" cellpadding="0"
    //                                                         align="right">
    //                                                         <tbody>
    //                                                             <tr>
    //                                                                 <td class="esd-container-frame" width="270"
    //                                                                     align="left">
    //                                                                     <table width="100%" cellspacing="0"
    //                                                                         cellpadding="0">
    //                                                                         <tbody>
    //                                                                             <tr>
    //                                                                                 <td align="center"
    //                                                                                     class="esd-block-button h-auto"
    //                                                                                     height="46">
    //                                                                                     <span
    //                                                                                         class="es-button-border es-fw"
    //                                                                                         style="background:#b6d7a8;border-width:3px;border-style:solid;border-color:#6aa84f">
    //                                                                                         <a href=""
    //                                                                                             class="es-button es-button-4752"
    //                                                                                             target="_blank"
    //                                                                                             style="padding:10px 95px;background:#b6d7a8;mso-border-alt:10px solid #b6d7a8;color:#ffffff;font-weight:bold;font-family:verdana,geneva,sans-serif;font-size:18px">Accept</a>
    //                                                                                     </span>
    //                                                                                 </td>
    //                                                                             </tr>
    //                                                                         </tbody>
    //                                                                     </table>
    //                                                                 </td>
    //                                                             </tr>
    //                                                         </tbody>
    //                                                     </table>
    //                                                 </td>
    //                                             </tr>
    //                                         </tbody>
    //                                     </table>
    //                                 </td>
    //                             </tr>
    //                         </tbody>
    //                     </table>
    //                 </td>
    //             </tr>
    //         </tbody>
    //     </table>
    // </div>`,
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
