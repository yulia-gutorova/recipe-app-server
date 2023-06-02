const Recipes = require('../models/Recipes');



//*********************************************************** 
// Get all recipes

exports.getAllRecipes = async (req, res) => {
    try {
        console.log("inside get all recipes");
        const allRecipes = await Recipes.find();
        if(!allRecipes){
            res.status(404).json({message: 'No recipes exist'});
        }
        else{
            res.status(200).json(allRecipes);
            
        }
    } catch (error) {
        res.status(500).json({message: error});
    } 
}

//*********************************************************** 
// Get recipe by id

exports.getRecipeById = async (req, res) => {
     try {
        console.log("inside get get recipe by ID");
        const recipe = await Recipes.findById({'_id': req.params.recipeId});
            res.status(200).json(recipe);             
    } catch (error) {
        res.status(404).json({message: error});
    } 
}


//*********************************************************** 
// Create a new recipe

exports.createRecipe = async (req, res) => { 

     try {
        console.log("inside create new recipe");
        const newRecipe = new Recipes({
            type: req.body.type,
            name: req.body.name,
            description: req.body.description,
            ingredients: req.body.ingredients,
            tags: req.body.tags,
            cookTime: req.body.cookTime,
            calories: req.body.calories,
            directions: req.body.directions,
            rates: req.body.rates,
        })

        res.status(201).json(await newRecipe.save());
    } catch (error) {
        res.status(500).json({message: error});
    } 

}

//*********************************************************** 
// Delete recipe by ID

exports.deleteRecipe = async (req, res) => {
     try {
        console.log("inside delete recipe by ID");
        res.status(200).json(await Recipes.deleteOne({'_id': req.params.recipeId}));
    } catch (error) {
        res.staus(500).json({message: error});
    } 
}

//*********************************************************** 
// Update recipe by id

exports.updateRecipe = async (req, res) => {
     try {
        res.status(201).json(await Recipes.updateOne(
            {'_id': req.params.recipeId},
            {
                $set: {
                    type: req.body.type,
                    name: req.body.name,
                    description: req.body.description,
                    ingredients: req.body.ingredients,
                    tags: req.body.tags,
                    cookTime: req.body.cookTime,
                    calories: req.body.calories,
                    directions: req.body.directions,
                    rates: req.body.rates,
                }
            }
        ));
        
    } catch (error) {
        res.status(400).json({message: error}); 
    }
}