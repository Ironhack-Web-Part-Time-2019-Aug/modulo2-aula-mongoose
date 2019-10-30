const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (request, response) => {
    response.send('Olá, mundo!');
});

app.listen(PORT, (error) => {
    if(error) {
        return console.log(error);
    }
    console.log(`App rodando na porta ${PORT}`);
});