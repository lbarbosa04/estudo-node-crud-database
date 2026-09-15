const express = require('express'); //criei a variavel e atribui a ela a blibioteca EXPRESS

const router = express.Router();  //Criei a variavel e atribui a ela a propriedade Router
router.use(express.json()); //Informo a minha variavel router que ela leia em JSON

const cursos = require('../dados/cursos.json');  //Nessa linha criei a variavel e atribui a ela os cursos.json 

const {verificarCursoCadastrado, verificarCursoId} = require('../function/function'); //Atribuo a função a variavel

router.get('/usuarios', (req, res) => {  //Nessa rota é verificado todos os cursos
  
 return res.json(cursos.name);

});

router.get('/usuarios/:id', verificarCursoId, (req, res) => {  //essa rota posso verificar apenas um curso da posição X
  const { id } = req.params;
  const curso = cursos.name[Number(id)];

  return res.json(curso);
});


router.post('/usuarios', verificarCursoCadastrado, (req, res) => {  //Essa rota utilizo para poder incluir um curso
  const { name } = req.body;

  cursos.name.push(name);
  return res.json(cursos.name);
});

router.put('/usuarios/:id', (req, res) => {  //Essa rota serve para atualizar algum curso
  const { id } = req.params;
  const { name } = req.body;

  cursos.name[Number(id)] = name;
  return res.status(200).json(cursos.name);
});

router.delete('/usuarios/:id', (req, res) =>{  // Rota utilizada para excluir um curso
  const{ id } = req.params;

  cursos.name.splice(Number(id), 1); 
  return res.json(cursos.name);
});

module.exports = router; //Posso exportar o modulo para outro arquivo