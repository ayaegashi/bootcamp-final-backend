const Bookmark = require('../../models/Bookmarks')

const existsBookmark = async(obj, {input}, {user: {id}}) => {
    try {
        console.log("TEST")

        const bookmark = await Bookmark.query().where({apiID: input.apiID, link: input.link, userID: id})
        return bookmark
    } catch (err) {
        console.log(err)
    }
}

const resolver = {
    Query: {
        existsBookmark
    }
}

module.exports = resolver