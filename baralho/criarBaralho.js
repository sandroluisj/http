const{baralho} = require('../data')
function criarBaralho(req,res){
    console.log(req.body);
    const novoBaralho = {
        id: baralho.length+ 1,
        nome: req.body.titulo
    };
    baralho.push(novoBaralho)
    res
    .status(201)
    .send({message: 'baralho criado',baralho: novoBaralho})

}
module.exports = criarBaralho