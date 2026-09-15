const cursos = require('../dados/cursos.json');

//verifica se o curso já está cadastrado
const verificarCursoCadastrado = (req, res, next) =>{
   const {name} = req.body;

   if(cursos.name.includes(name)){
    return res.status(400).json({Erro: "Esse curso já está cadastrado"});
   }

    return next();
};

const verificarCursoId = (req, res, next) => {
  const { id } = req.params;
  const curso = cursos.name[Number(id)];

  if (curso === undefined) {
    return res.status(404).json({ error: 'Curso não encontrado' });
  }

  req.curso = curso; // guarda o curso encontrado pra rota usar depois
  next(); // libera pra rota principal
};

module.exports = { verificarCursoCadastrado, verificarCursoId };