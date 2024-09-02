const { flashcard } = require('../data')

const deletarFlashcard = (req,res) =>{
    const { idBaralho } = req.params
    const { id } = req.params
    const index = flashcard.findIndex((f) => f.id == id)

    if(index === -1){
        return res.status(404).send('Flashcard não encontrado')
    }

    const flashcardDeletado = flashcard.splice(index, 1) [0]

    res.status(200).send({
        message: 'Flashcard deletado com sucesso',
        flashcard: flashcardDeletado
    })
}

module.exports = deletarFlashcard