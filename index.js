const express = require('express')
const app = express()
const port = 3000

const criarBaralho = require('./baralho/criarBaralho')
const listarBaralho = require('./baralho/listarBaralhos')
const autualizarBaralho = require("./baralho/atualizarBaralho")
const deletarBaralho = require("./baralho/deletarBaralho")
const criarFlashcards = require("./flashcard/criarFlashcard")
const listarFlashcards = require("./flashcard/listarFlashcards")
const autualizarFlashcards = require("./flashcard/atualizarFlashcard")
const deletarFlashcard = require("./flashcard/deletarFlashcard")

app.use(express.json()); 

app.get('/',(req, res) => {
    res.send("servidor ok")
}) 

app.post('/baralho', criarBaralho);
app.get('/baralho', listarBaralho)
app.put('/baralho/:id', autualizarBaralho)
app.delete('/baralho/:id', deletarBaralho)
app.post('/flashcard', criarFlashcards)
app.get('/flashcard', listarFlashcards)
app.put('/flashcard/:idBaralho/:id', autualizarFlashcards)
app.delete('/flashcard/:idBaralho/:id', deletarFlashcard)

app.listen(port, () => {
    console.log(`servidor rodando em http://localhost:${port}`)
})