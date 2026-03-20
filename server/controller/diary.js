const Diary = require("../model/diary")

async function getAll(req, res) {
    try {
        const entries = await Diary.getAll()
        res.status(200).json(entries)
    } catch (err) {
        res.status(500).json({error: err.messagae})
    }
}

async function createEntry(req, res) {
    const {content, title, category} = req.body
    try {
            const entries = await Diary.createEntry(content, title, category)
            res.status(200).json(entries)
    } catch (err) {
        res.status(500).json({error: err.messagae})
    }
}



module.exports = {
    getAll,
    createEntry
}