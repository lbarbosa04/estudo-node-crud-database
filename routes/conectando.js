const express = require('express'); //"blibioteca"

const router = express.Router(); // crio a variavel com a "blibioteca"
router.use(express.json());

const cursos = require('../dados/cursos.json'); // importo os cursos

const verificaCursos = require('../function/function');

router.get('/usuarios', (req, res) => { //verificar curso
  
 return res.json(cursos.name);

});

router.post('/usuarios', verificaCursos, (req, res) => { //incluir curso
  const { name } = req.body;

  cursos.name.push(name);
  return res.json(cursos.name);
});

module.exports = router;