const { flashcard } = require('../data')

function criarFlashcard(req,res) {
    console.log(req.body)
    const novoFlashcard = {
        idBaralho: req.body.idBaralho,
        id: flashcard.length + 1,
        pergunta: req.body.pergunta,
        resposta: req.body.resposta
    }
    flashcard.push(novoFlashcard)
    res
    .status(201)
    .send({message: 'Baralho criado com sucesso!', flashcard: novoFlashcard})
}

module.exports = criarFlashcard