const express = require("express")
const app = express()

const herois = ["Mulher Maravilha", "Superman", "Batman"];

app.get("/herois", function (req, res) {
    res.send(herois)
})

app.get("/herois/:id", (req, res) => {
    const id = req.params.id
    res.send(herois[id-1])
})

app.post("/herois/cadastro/:nomeHeroi", (req, res) =>{
    const nomeHeroi = req.params.nomeHeroi

    herois.push(nomeHeroi)
    res.send("Novo heroi" + nomeHeroi + "adicionado!!")
})


const animais = [
    {id: 1, nome: "Rex", espécie: "Cachorro", idade: 10},
    {id: 2, nome: "Colt", espécie: "Leão", idade: 8},
    {id: 3, nome: "Bolt", espécie: "Gato", idade: 3}
]

app.get("/animais", (req, res) =>{
    res.send(animais)
})

app.get("/animais/:id", (req, res) =>{
    const idAnimal = req.params.id
    res.send(animais[idAnimal-1])
})




// app.get("/marvel", (req, res) => {
//     const herois = ["Homem Aranha", "Capitã Marvel", "Capitão América"];
//     res.send(herois);
// })

app.listen(3000)
