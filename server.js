require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const Pokemon = require('./models/pokemonModel');
const pokemonRoute = require('./routes/pokemonRoute');
const app = express()

const PORT = process.env.PORT
const MONGO_URL = process.env.MONGO_URL

// Express Middleware to be able to receive data through JSON objects
app.use(express.json())

app.use('/api', pokemonRoute);

app.get('/', (req, res) => {
    res.send('Hello Pokédex-API')
})


mongoose.connect(MONGO_URL)
.then(() => {
    console.log("Connected to MongoDB")
    app.listen(PORT, () => {
        console.log('Node-API is running on port %d', PORT);
        });
}).catch((error) => {
    console.log(error)
})
