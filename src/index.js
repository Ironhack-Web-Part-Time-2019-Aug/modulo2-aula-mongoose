const express = require('express');
const app = express();
const PORT = 3000;
const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/teste', {useNewUrlParser: true})
  .then((mongoConnection) => console.log(`Connected to Mongo! Database name: "${mongoConnection.connections[0].name}"`))
  .catch(error => console.error('Erro ao conectar com o banco de dados'));


app.get('/', (request, response) => {
    response.send('Olá, mundo!');
});

app.listen(PORT, (error) => {
    if(error) {
        return console.log(error);
    }
    console.log(`App rodando na porta ${PORT}`);
});
