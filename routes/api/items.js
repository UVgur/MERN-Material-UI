const express = require('express');
const router = express.Router();

//Exprss.Router: manage the root, by the action (HTTP)
//and interact with the database and hes functions


//Item Model
const Item = require('../../models/Item');

// @route GET api/items
// @desc GET All Items
// @access  Public
router.get('/', (req,res)=>{
    Item.find()
    .sort({ date: -1 })
    .then(items => {
        res.json(items)
    });

// @route POST api/items
// @desc Create an Item
// @access  Public
router.post('/', (req,res)=>{
    const newItem = new Item({
        name: req.body.name,
        secret: req.body.secret
    });
    newItem.save().then(item => {
        res.json(item);
    })
    });

// @route DELETE api/items/:id
// @desc Delete an Item
// @access Public
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id).then(item =>
        item.remove()).then(()=> res.json({success: true}))
        .catch(err => res.status(404).json({success : false}))
    });

});



module.exports = router;