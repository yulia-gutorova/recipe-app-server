const express = require('express');
const router = express.Router();
const cors = require('cors')
const controller = require('../controllers/recipeController');

//*********************************************************** 
// Return all recipes
router.get('/', cors(),  controller.getAllRecipes);

//*********************************************************** 
// Get a specific recipe by id
router.get('/:recipeId', controller.getRecipeById);

//*********************************************************** 
// Create a new recipe
router.post('/', controller.createRecipe);

//*********************************************************** 
// Delete a specific recipe
router.delete('/:recipeId', controller.deleteRecipe);

//*********************************************************** 
// Update existing recipe
router.patch('/:recipeId', controller.updateRecipe);

module.exports = router;