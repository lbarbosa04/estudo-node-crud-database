const routerCursos = require('./conectando');

module.exports = (app) =>{ //Utilizo essa função para atribuir os arquivos das rotas e exportar para o app
    app.use(routerCursos);

};