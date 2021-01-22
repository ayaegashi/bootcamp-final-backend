const merge = require('lodash.merge')
const User = require('./User')
const Bookmark = require('./Bookmark')
const TriedRecipe = require('./TriedRecipe')

const resolvers = [User, Bookmark, TriedRecipe]

module.exports = merge(...resolvers)
