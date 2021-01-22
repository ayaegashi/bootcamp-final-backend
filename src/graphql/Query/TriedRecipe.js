const TriedRecipe = require('../../models/TriedRecipes')
const User = require('../../models/User')

const existsTriedRecipe = async(obj, {input}, {user: {id}}) => {
    try {
        const triedRecipes = await TriedRecipe.query().where({apiID: input.apiID, link: input.link, userID: id})
        console.log(triedRecipes)
        return triedRecipes
    } catch (err) {
        console.log(err)
    }
}

const resolver = {
    Query: {
        existsTriedRecipe
    }
}

module.exports = resolver