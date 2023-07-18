const mongoose = require('moongoose')

const pokemonSchema = moongose.Schema(
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
            required: false,
        }
    },
    {
        timestamps: True
    }

)

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon;
