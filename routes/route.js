const express = require('express'); //Exportei a biblioteca express para a variavel express

const app = express(); //criei a variavel app e adicionei a biblioteca express
app.use(express.json());


const port = 3000; //porta que eu estou utilizando

const rotas = require('./conectando'); //importei as rotas do meu arquivo conectando.js

app.use(rotas); //aqui informo para o route.js que posso usar as rotas do conectando.js

app.listen(port, (error) => {  //Servidor rodando

    if(error){
        console.log("Erro no servidor!");
        return;
    }

    console.log(`O servidor está rodando na porta ${port}`);

});
