const express = require('express')
const mongoose = require('mongoose')
const Pokemon = require('./models/pokemonModel')
const app = express()


app.use(express.json())

// routes 
app.get('/', (req, res) => {
    res.send('Hello Node-API')
})

app.get('/blog', (req, res) => {
    res.send('Hello blog')
})

app.post('/pokemon', (req, res) => {
    try{
        const pokemon = await Product.create(req.body)
        res.status(200).json(pokemon);

    } catch (error) {
        console.log(error.message);
        res.status(500).json((message: error.message));

    }
})

mongoose.connect()
.then(() => {
    console.log("Connected to MongoDB")
    app.listen(3000, () => {
        console.log('Node-API is running on port 3000')
        });
}).catch((error) => {
    console.log(error)
})

//https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png
