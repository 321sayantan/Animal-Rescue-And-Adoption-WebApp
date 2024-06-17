const express = require('express')
const Rescue = require('../db/RescuePost')
const mailTransporter = require("../utils/mailServer");
const rescueNotification = require('../resources/rescueNotifyMail')

const router = express.Router()

router.post('/post', async (req, res) => {
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
    data.save().then((result) => {
        res.status(200).json({ message: "Post added successfully" })
    }).catch((err) => {
        res.status(500).json({ errors: err })
    })
});


// get all rescue posts
router.get('/getallrescues', async (req, res, next) => {
    try {
        const allposts = await Rescue.find()
        setTimeout(() => {
            res.status(200).json(allposts)
        }, 3000)
    } catch (error) {
        res.status(400).json(error)
    }
})


// get rescue animal by id
router.get('/getrescue/:id', async (req, res, next) => {
    try {
        const rescuePost = await Rescue.findOne({ _id: req.params.id })
        setTimeout(() => {
            res.status(200).json(rescuePost)
        }, 3000)
    } catch (error) {
        res.status(400).json(error)
    }
})


//filter rescue query by address
router.get('/filter', async (req, res, next) => {
    try {
        const query = req.query.search
        let posts = await Rescue.find({ address: { $regex: query, $options: "i" } });
        setTimeout(() => {
            res.status(200).json(posts);
        }, 3000)
    } catch (error) {
        next(error)
    }
});



// test route for email viewing
router.get('/default-rescue-mail', (req, res, next) => {
    try {
        const mailDetails = {
            from: "AdoPet2024@gmail.com",
            to: "crossorigenes@gmail.com",
            subject: "NEED YOUR HELP!",
            html: rescueNotification(),
        }
        mailTransporter.sendMail(mailDetails, function (err, data) {
            if (err) {
                console.log("Error Occurs");
            } else {
                console.log("Email sent successfully");
            }
        });
        setTimeout(() => {
            res.status(200).json({ message: "Mail sent successfully" })
        }, 100)
    } catch (error) {
        next(error)
    }
})

module.exports = router

