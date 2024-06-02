const express = require("express");
const Post = require("../db/AdoptPost");

const router = express.Router();

router.post('/post', async(req, res)=>{
    const data = new Post({
      donor_name: req.body.donor.donor_name,
      donor_phone: req.body.donor.phone,
      donor_address: req.body.donor.address.area,
      donor_latitude: req.body.donor.address.coords.latitude,
      donor_longitude: req.body.donor.address.coords.longitude,
      zip_code: req.body.donor.address.zip_code,
      vet_name: req.body.vet.pet_name,
      vet_category: req.body.vet.category,
      vet_breed: req.body.vet.breed,
      image: req.body.vet.image,
      image_id: req.body.vet.image_id,
      is_vaccinated: req.body.vet.is_vaccinated,
      vet_description: req.body.vet.description,
    });
    data.save().then((result)=>{
        res.status(200).json({message: "Post added successfully"})
    }).catch((err)=>{
        res.status(500).json({errors: err})
    })
    console.log(data)
});

router.get('/getallpost', async(req, res)=>{
    const allposts = await Post.find();
    setTimeout(()=>{
        res.status(200).json(allposts);
    },3000)
})


router.get('/getpost/:id', async(req, res)=>{
    const allposts = await Post.findOne({ _id: req.params.id });
    setTimeout(()=>{
        res.status(200).json(allposts);
    },3000)
})

module.exports = router;