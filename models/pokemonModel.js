const mongoose = require('mongoose')

const pokemonSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Digite o nome do Pokémon:"]
        },
        
        strength: {
            type: String,
            required: [true, "Digite o tipo primário do Pokémon:"]
        },

        image: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true
    }

)

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon;
