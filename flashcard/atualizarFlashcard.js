const { flashcard } = require('../data')

const atualizarFlashcard = (req,res) => {
    const { idBaralho } = req.params
    const { id } = req.params
    const novaPergunta = req.body.pergunta
    const novaResposta = req.body.resposta

    const flashcards = flashcard.find((f) => f.id == id)

    if(!flashcards){
        return res.status(404).send({message: 'Flashcard não encontrado'})
    }

    flashcards.pergunta = novaPergunta
    flashcards.resposta = novaResposta
    res.status(200).send({
        message: 'Flashcard atualizado com sucesso!',
        flashcards: flashcard
    })
}

module.exports = atualizarFlashcard