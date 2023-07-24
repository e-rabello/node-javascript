require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const Pokemon = require('./models/pokemonModel')
const app = express()

const PORT = process.env.PORT
const MONGO_URL = process.env.MONGO_URL

// Express Middleware to be able to receive data through JSON objects
app.use(express.json())

// routes 
app.get('/', (req, res) => {
    res.send('Hello Pokédex-API')
})


// GET 
// Fetch all pokémons from MongoDB
app.get('/pokemon', async(req, res) => {
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
app.get('/pokemon/:id/', async(req, res) => {
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
app.post('/pokemon', async(req, res) => {
    try{
        const pokemon = await Pokemon.create(req.body);
        res.status(200).json(pokemon);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
})

mongoose.connect(MONGO_URL)
.then(() => {
    console.log("Connected to MongoDB")
    app.listen(PORT, () => {
        console.log('Node-API is running on port 3000')
        });
}).catch((error) => {
    console.log(error)
})
