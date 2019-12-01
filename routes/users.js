const express = require('express');
const router = express.Router();
const User = require('../models/User');

// LIST ALL Users
router.get('/', async (req, res) => {
    try{
        const users = await User.find();
        res.json(users);
    }catch(err){
        res.json({message:err});
    }
});

// Add A USER

router.post('/', async (req, res) => {
    const user = new User({
        firstname: req.body.firstname,
        surname: req.body.surname,
    });
    try {
        const savedUser = await user.save();
        res.json(savedUser);
    } catch (err) {
        res.json({ message: err});
    }
});

// SPECIFIC USER

router.get('/:userId', async (req, res) => {
    try{
        const user = await User.findById(req.params.userId);
        res.json(user);
    } catch (err) {
        res.json({ message: err});
    }
});

// DELETE POST

router.delete('/:userId', async (req, res) => {
    try{
        const removedUser = await Post.remove({_id: req.params.userId});
        res.json(removedUser);
    } catch (err) {
        res.json({ message: err});
    }
});

// UPDATE POST

router.patch('/:userId', async (req, res) => {
    try{
        const updatedUser = await User.updateMany(
            { _id: req.params.userId},
            {$set: { 
                firstname: req.body.firstname,
                surname: req.body.surname,
             } 
        });
        res.json(updatedUser);
    } catch (err) {
        res.json({ message: err});
    }
});

module.exports = router; 