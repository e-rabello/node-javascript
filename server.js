require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const Pokemon = require('./models/pokemonModel')
const app = express()

const PORT = process.env.PORT
const MONGO_URL = process.env.MONGO_URL

app.use(express.json())

// routes 
app.get('/', (req, res) => {
    res.send('Hello Node-API')
})

app.get('/blog', (req, res) => {
    res.send('Hello blog')
})

app.post('/pokemon', async(req, res) => {
    try{
        const pokemon = await Pokemon.create(req.body)
        res.status(200).json(pokemon);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});

    }
})

<<<<<<< HEAD
mongoose.connect(MONGO_URL)
=======
mongoose.connect()
>>>>>>> 543e8061b3f232ad6b50cc1021e660db71893f51
.then(() => {
    console.log("Connected to MongoDB")
    app.listen(PORT, () => {
        console.log('Node-API is running on port 3000')
        });
}).catch((error) => {
    console.log(error)
})

//https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png
