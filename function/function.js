const cursos = require('../dados/cursos.json');

const verificarCurso = (req, res, next) =>{
   const {name} = req.body;

   if(cursos.name.includes(name)){
    return res.status(400).json({Erro: "Esse curso já está cadastrado"});
   }

    return next();
}

module.exports = verificarCurso;