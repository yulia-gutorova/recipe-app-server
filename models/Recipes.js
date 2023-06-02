var mongoose = require('mongoose');


const RecipesSchema = mongoose.Schema({ 
                 
    type: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    ingredients: {
        type: Array,
        required: true,
    },

    tags: {
        type: Array,
        required: true
    },
    
    cookTime: {
        type: Number,
        required: true
    },

    calories: {
        type: String,
        required: true
    },

    directions: {
        type: String,
        required: true
    },

    rates: {
        type: Number,
        required: false, 
        default: true
    },

}, { versionKey: false })

module.exports = mongoose.model('recipes', RecipesSchema); 
