const{ baralho, flashcard, } = require('../data')
const deletarBaralho = (req, res) =>{
    const{ id } = req.params;
    const index = baralho.findIndex((b) => b.id == id)
        if (index === -1){
            return res.status(404).send('baralho não encontrado')
        }    

    const baralhodeletado = baralho.splice(index, 1)[0];

   flashcard.forEach((flashcards, index)  => {
     if(flashcards.idBaralho == id){
          flashcard.splice(index, 1)
        }
  });
            res.status(200).send({
                message: 'baralho deletado',
                baralho: baralhodeletado
            })
        }
            module.exports = deletarBaralho