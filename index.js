const express = require('express');
const app = express();
const port = 8080;
const Vigenere = require('caesar-salad').Vigenere;
const key = 'milka';

app.get('/:name',(req,res) => {
    res.send(req.params.name);
});

app.get('/encode/:name',(req,res) => {
    res.send(Vigenere.Cipher(key).crypt(req.params.name));
});

app.get('/decode/:name',(req,res) => {
    res.send(Vigenere.Decipher(key).crypt(req.params.name));
});

app.listen(port,() => {
    console.log('Server online on ' + port);
});

