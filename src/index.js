const express = require('express');
const app = express();
const PORT = 3000;
const mongoose = require('mongoose');
const { UserModel } = require('./models');

mongoose
  .connect('mongodb+srv://<USER>:<PASSWORD>@<HOSTNAME>/<COLLECTION>', {useNewUrlParser: true})
  .then((mongoConnection) => console.log(`Connected to Mongo! Database name: "${mongoConnection.connections[0].name}"`))
  .catch(error => console.error('Erro ao conectar com o banco de dados', error));


app.get('/', (request, response) => {
    UserModel.create({ name: 'Zig1', password:"ironhack2019", job: 'Student' })
    .then((user) => { 
        response.send(`Olá, ${user}!`);
    })
    .catch(err => { console.log('An error happened:', err) });
});

app.listen(PORT, (error) => {
    if(error) {
        return console.log(error);
    }
    console.log(`App rodando na porta ${PORT}`);
});