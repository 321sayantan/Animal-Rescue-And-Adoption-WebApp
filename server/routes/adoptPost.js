const express = require("express");
const Post = require("../db/AdoptPost");

const router = express.Router();

router.post('/post', async (req, res) => {
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
    data.save().then((result) => {
        res.status(200).json({ message: "Post added successfully" })
    }).catch((err) => {
        res.status(500).json({ errors: err })
    })
    // console.log(data)
});

router.get('/getallpost', async (req, res, next) => {
    try {
        const allposts = await Post.find();
        setTimeout(() => {
            res.status(200).json(allposts);
        }, 3000)
    } catch (error) {
        next(error)
    }
})


router.get('/getpost/:id', async (req, res, next) => {
    try {
        const posts = await Post.findOne({ _id: req.params.id });
        setTimeout(() => {
            res.status(200).json(posts);
        }, 3000)
    } catch (error) {
        next(error)
    }
})

router.get('/filter', async (req, res, next) => {
    try {
        const query = req.query.search
        let posts = await Post.find({ donor_address: { $regex: query, $options: "i" } });
        // let posts = await Post.aggregate($filter: {$search: query})
        // posts = posts.map((post) => ({
        //     _id: post._id,
        //     vet_name: post.title,
        //     category: post.vet_category,
        //     breed: post.vet_breed,
        //     address: post.donor_address,
        //     coords: {
        //         lat: post.donor_latitude,
        //         lng: post.donor_longitude
        //     }
        // }))
        setTimeout(() => {
            res.status(200).json(posts);
        }, 3000)
    } catch (error) {
        next(error)
    }
});


// router.get('/filter', async (req, res, next) => {
//     try {
//         const { max, search } = req.query;
//         const allposts = await Post.find();
//         let filteredPosts = JSON.parse(allposts);

//         if (search) {
//             filteredPosts = filteredPosts.filter((item) => {
//                 const searchableText = `${item.donor_address} ${item.vet_category} ${item.vet_description}`;
//                 return searchableText.toLowerCase().includes(search.toLowerCase());
//             });
//         }

//         if (max) {
//             filteredPosts = filteredPosts.slice(filteredPosts.length - max, filteredPosts.length);
//         }

//         filteredPosts = filteredPosts.map((post) => ({
//             _id: post._id,
//             vet_name: post.title,
//             category: post.vet_category,
//             breed: post.vet_breed,
//             address: post.donor_address,
//             coords: {
//                 lat: post.donor_latitude,
//                 lng: post.donor_longitude
//             }
//         }))

//         setTimeout(() => {
//             res.status(200).json(filteredPosts);
//         }, 2500)
//     } catch (error) {
//         next(error)
//     }
// });


module.exports = router;