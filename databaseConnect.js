const mongoose = require('mongoose');

const connectToMongo = async () => {
        try {
            mongoose.set('strictQuery', false)
            mongoose.connect('mongodb+srv://uggla-gut:ComHem2011@cluster0.qrygrvo.mongodb.net/RecipeApp',
            ) 
            console.log('Mongo connected')
        }
        catch(error) {
            console.log(error)
            process.exit()
        }
}
module.exports = connectToMongo;