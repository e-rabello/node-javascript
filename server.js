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

// POST
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

//https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png
