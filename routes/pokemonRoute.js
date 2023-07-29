const express = require('express');
const Pokemon = require('../models/pokemonModel');
const router = express.Router();

// GET 
// Fetch all pokémons from MongoDB
router.get('/pokemon', async(req, res) => {
    try{
        const pokemons = await Pokemon.find({});
        res.status(200).json(pokemons);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
})

// GET
// Fetch a pokémon from MongoDB using its id
router.get('/pokemon/:id/', async(req, res) => {
    try{
        const {id} = req.params; 
        const pokemon = await Pokemon.findById(id);
        res.status(200).json(pokemon)

    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
})

// POST
// Create a new pokémon in MongoDB
router.post('/pokemon', async(req, res) => {
    try{
        const pokemon = await Pokemon.create(req.body);
        res.status(200).json(pokemon);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
})


//PUT 
// Update information about a pokémon
router.put('/pokemon/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const pokemon = await Pokemon.findByIdAndUpdate(id, req.body);
        // Couldn't find the specific pokémon in the Database
        if(!pokemon) {
            return res.status(404).json({message: 'Cannot any find any pokémon with id %d', id})
        }
        else
           res.status(200).json(pokemon);

    } catch (error) {
        res.status(500).json({message: error.message});
    }

})

module.exports = router;