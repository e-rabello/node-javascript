var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const Pokemon = require("./models/pokemonModel");
const app = express();
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Hello Pokédex-API");
});
app.get("/pokemon", (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const pokemons = yield Pokemon.find({});
        res.status(200).json(pokemons);
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
}));
app.get("/pokemon/:id/", (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const pokemon = yield Pokemon.findById(id);
        if (!pokemon) {
            return res.status(404).json({ message: "Cannot find any pokémon with id %d", id });
        }
        else {
            res.status(200).json(pokemon);
        }
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
}));
app.put("/pokemon/:id", (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const pokemon = yield Pokemon.findByIdAndUpdate(id, req.body);
        if (!pokemon) {
            return res.status(404).json({ message: "Cannot any find any pokémon with id %d", id });
        }
        else {
            const updatedPokemon = yield Pokemon.findByIdAndUpdate(id, req.body);
            res.status(200).json(updatedPokemon);
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}));
app.post("/pokemon", (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const pokemon = yield Pokemon.create(req.body);
        res.status(200).json(pokemon);
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
}));
app.delete("/pokemon/:id", (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const pokemon = yield Pokemon.findByIdAndDelete(id);
        if (!pokemon) {
            return res.status(404).json({ message: "Cannot any find any pokémon with id %d", id });
        }
        else {
            res.status(200).json(pokemon);
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}));
mongoose.connect(MONGO_URL)
    .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
        console.log("Node-API is running on port 3000");
    });
}).catch((error) => {
    console.log(error);
});
