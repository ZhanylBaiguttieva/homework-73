const express = require('express');
const app = express();
const port = 8080;


app.get('/:name',(req,res) => {
    res.send(req.params.name);
});

app.listen(port,() => {
    console.log('Server online on ' + port);
});