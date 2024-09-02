const { flashcard } = require('../data')

const listarFlashcards = (req,res) => {
    res.status(200).send(flashcard)
}

module.exports = listarFlashcards