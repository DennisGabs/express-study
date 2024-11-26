import express from "express";
const app = express();
const port = 3000;

app.get('/', (_, res) => {
    res.send('Hello World')
})

app.get('/about', (_, res) => {
    res.send('Rota About')
})

app.listen(port, function() {
    console.log(`server on port: ${port}`)
})