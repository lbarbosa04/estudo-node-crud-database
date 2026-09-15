const express = require('express'); //Exportei a biblioteca express para a variavel express

const app = express(); //criei a variavel app e nela tem a biblioteca express
app.use(express.json());


const port = 3000; //porta que eu estou utilizando

const rotas = require('./conectando'); //importei as rotas do meu arquivos conectando

app.use(rotas); //aqui posso utilizar as rotas importadas

app.listen(port, (error) => {  //Servidor rodando

    if(error){
        console.log("Erro no servidor!");
        return;
    }

    console.log(`O servidor está rodando na porta ${port}`);

});
