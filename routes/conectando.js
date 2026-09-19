const { Router } = require('express'); //Metodo de desestruturação onde eu importo da biblioteca apenas um objeto
const router = Router(); // atribuo a variavel o Router()

const cursos = require('../dados/cursos.json'); //Atribuo a cursos o json onde está salvo os cursos

router.get('/cursos', (req, res) =>{ //Nessa rota eu mostro todos os cursos que estão salvo em cursos.name

  return res.status(200).json(cursos.name)
});

router.get('/cursos/:id', (req, res) => { //Nessa rota mostro os cursos um por vez
  const { id } = req.params; // pego o ID da requisição 
  const curso = cursos.name[Number(id)]; //Com o id vou ate os cursos vejo a posição e mostro o curso salvo

  if(!curso){  //se não tiver o curso mostra o erro 
    return res.status(404).json({ error: 'Curso não e!' });
  }

  return res.json(curso);
});

router.post('/cursos', (req, res) =>{ //Rota para adicionar um curso
  const { name } = req.body;

  cursos.name.push(name);
  return res.json(cursos.name);
});

router.put('/cursos/:id', (req, res) =>{ // Rota para atualizar um curso
 const { id } = req.params;
 const { name } = req.body;

 if(!cursos.name[Number(id)]){
  return res.status(404).json({ Erro: 'curso não encontrado' });
 }

 cursos.name[id] = name;
 return res.status(200).json(cursos.name);
});

router.delete('/cursos/:id', (req, res) =>{
  const { id } = req.params;

  cursos.name.splice(id, 1);
  return res.status(200).json(cursos.name);
});

module.exports = router;