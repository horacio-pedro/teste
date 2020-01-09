const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('EU SOU APENAS UM TESTE DE DEPLOY')
});

app.listen(4000);