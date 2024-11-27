import express from "express";
const app = express();
const port = 3000;

app.get('/', (_, res) => {
    res.send('Hello World')
})

app.get('/about', (_, res) => {
    res.send('<h1>Rota About</h1>')
})

app.get('/about/:id', (req, res) => {
    res.send(req.params.id)
})

app.listen(port, function() {
    console.log(`server on port: ${port}`)
})