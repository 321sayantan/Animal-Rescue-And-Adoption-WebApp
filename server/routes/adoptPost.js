const express = require("express");
const Post = require("../db/AdoptPost");
const User = require('../db/userModel')
const mailTransporter = require("../utils/mailServer");
const verifyToken = require('../utils/verifyToken');
const jwt = require('jsonwebtoken');
const adoptReqMail = require('../resources/adoptRequestMail')
// const nodemailer = require("nodemailer");

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

router.post("/adoptionRequest", verifyToken, (req, res) => {
	try {
		let recieverEmail, senderEmail, resData;
		jwt.verify(req.token, 'shhh', async (err, data) => {
			resData = await Post.find({ _id: req.body.id })
			recieverEmail = resData.donor_email
			const sender = await User.find({ _id: data.id })
			senderEmail = sender.email
		})

		resData = {...resData, dtOfApntmnt: req.body.selDate}

		let mailDetails = {
			// from: "AdoPet2024@gmail.com",
			// to: "dsnehodipto@gmail.com",
			from: senderEmail,
			to: recieverEmail,
			subject: "Request for adoption",
			html: adoptReqMail(resData),
		};

		mailTransporter.sendMail(mailDetails, function (err, data) {
			if (err) {
				console.log("Error Occurs");
			} else {
				console.log("Email sent successfully");
			}
		});
		setTimeout(() => {
			res.status(200).json({ message: "Mail sent successfully" })
		}, 1000)
	} catch (error) {
		res.status(402).json(error)
	}

});

module.exports = router;
