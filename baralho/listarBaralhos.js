const { baralho} = require('../data')
const listarBaralho = (req, res) =>{
    res.status(200).send(baralho)
};
module.exports = listarBaralho