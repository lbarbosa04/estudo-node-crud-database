const express = require('express'); //criei a variavel express e atribui a ela, a biblioteca express

const app = express(); //criei a variavel app e adicionei a biblioteca express
app.use(express.json());

const port = 3000; //porta que eu estou utilizando

const rotas = require('./rotasApp'); //importei as rotas do meu arquivo conectando.js

rotas(app); 

app.listen(port, (error) => {  //Servidor rodando

    if(error){
        console.log("Erro no servidor!");
        return;
    }

    console.log(`O servidor está rodando na porta ${port}`);
});