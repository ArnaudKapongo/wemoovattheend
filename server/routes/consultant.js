const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');
const gravatar = require('gravatar');
const Consultant = require('../model/Consultant/Consultant');
const User = require('../model/User/User');


// @route  POST api/consultant
// @desc   Create a consultant
// @access Private

router.post('/', [auth, [

    check('status', 'Status is required')
    .not()
    .isEmpty(),
    check('surname', 'Surname is required')
    .not()
    .isEmpty(),
    check('name', 'Name is required')
    .not()
    .isEmpty()

] ], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      return res.status(400).json({ errors: errors.array() });
    }

    try {
    const user = await User.findById(req.user.id).select('-password');

     // Get users gravatar
     const avatar = gravatar.url(req.body.avatar, {
        s: '200',
        r: 'pg',
        d: 'mm'
    });

    const newConsultant = new Consultant ({
            status: req.body.status,
            name: req.body.name,
            surname: req.body.surname,
            avatar,
            user: req.user.id
        });

        const post = await newConsultant.save();

        res.json(post);
        
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');  
    }
});

// @route  GET api/consultant
// @desc   Get all Consultants
// @access Private

router.get('/', auth, async (req, res) => {
    try {
        
        const consultants = await Consultant.find().sort({ date: -1 });
        res.json(consultants);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error'); 
    }
});



// @route  GET api/consultant/company
// @desc   Get all Consultants
// @access Private

router.get('/company', auth, async (req, res) => {

    try {
        const user = await User.findById(req.user.id).select('-password');
      
        const consultants = await Consultant.find({ user: req.user.id });
       
        res.json(consultants);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


// @route  GET api/consultant/:id
// @desc   Get consultant by ID
// @access Private

router.get('/:id', auth, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if(!post) {
            return res.status(404).json({ msg: 'Post not found '});
        }
        res.json(post);
    } catch (err) {
        console.error(err.message);
        if(err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Post not found' });
        }
        res.status(500).send('Server Error'); 
    }
});


// @route DELETE api/consultant/:id
// @desc Delete a consultant
// @access Private

router.delete('/:id', auth, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if(!post) {
            return res.status(404).json({ msg: 'Post not found' });
        }

        // Check user
        if(post.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'User not authorized '});
        }

        await post.remove();
        
        res.json({ msg: 'Post removed '});

    } catch (err) {
        console.error(err.message);
        if(err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Post not found' });
        }
        res.status(500).send('Server Error'); 
    }
});



// @route  POST api/consultant/rating/:id
// @desc   Rating on a consultant
// @access Private

router.post('/rating/:id', [auth, [

    check('month', 'Month is required')
    .not()
    .isEmpty()

] ], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      return res.status(400).json({ errors: errors.array() });
    }

    try {
    const user = await User.findById(req.user.id).select('-password');
    const consultant = await Consultant.findById(req.params.id);

    const newRating = {
            month: req.body.month,
            skillstechnical: req.body.skillstechnical,
            skillsfunctional: req.body.skillsfunctional,
            progress: req.body.progress,
            user: req.user.id,
            realisation: req.body.realisation,
            transfert: req.body.transfert,
            remark: req.body.remark,
            note: req.body.note,
            rigor: req.body.rigor,
            punctuality: req.body.punctuality,
            autonomy: req.body.autonomy,
            communication: req.body.communication,
            strength: req.body.strength,
            ratingSending: req.body.ratingSending
    };

    consultant.ratings.unshift(newRating);

    await consultant.save();

    res.json(consultant.ratings);
        
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');  
    }
});


// @route  POST api/consultant/rating/:id/:rating_id
// @desc   Delete Rating
// @access Private

router.delete('/rating/:id/:rating_id', auth, async (req, res) => {
   
    try {
    
    const consultant = await Consultant.findById(req.params.id);
    
    // Pull out rating
    const rating = consultant.ratings.find(rating => rating.id === req.params.rating_id);

    // Make sure rating exists
    if(!rating) {
        return res.status(404).json({ msg: 'Rating does not exist'});
    }
    
    // Check user
    if(rating.user.toString() !== req.user.id) {
        return res.status(401).json({ msg: 'User not authorized '});
    }

    // Get remove index
    const removeIndex = consultant.ratings
    .map(rating => rating.user.toString())
    .indexOf(req.user.id);

    consultant.ratings.splice(removeIndex, 1);

    await consultant.save();

    res.json(consultant.ratings);

    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');  
    }
});



module.exports = router;