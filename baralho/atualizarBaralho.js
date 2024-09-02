const { baralho } = require('../data')

const autualizarBaralho = (req, res) =>{
    const{ id } = req.params
    const novoTitulo = req.body.titulo;
    const baralhos = baralho.find((b) => b.id == id);
    if (!baralhos) {
        return res.status(404).send({menssage: 'baralho não encontrado'})
    }
        baralhos.titulo = novoTitulo
        res.status(200).send({
            menssage: 'baralho autualizado',
            baralhos: baralhos
        })
    
}
module.exports = autualizarBaralho