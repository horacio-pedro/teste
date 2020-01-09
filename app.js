const express = require('express');

const http = require('http').Server(app)
const app = express();

app.get('/', (req, res) => {
    res.send('EU SOU APENAS UM TESTE DE DEPLOY')
});

http.listen(8080);