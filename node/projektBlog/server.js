let express = require("express");
let bodyParser = require("body-parser");

let app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.set("view engine", "ejs")
app.listen(8080)
console.log("Serwer zostal pomyslnie uruchomiony na porcie 8080")


let listaWpisow = [];

app.get("/", function(req, res) {
    res.render("home", {dane: listaWpisow})
})

app.get("/dodaj", function(req, res) {
    res.render("dodaj")
})

app.post("/dodaj", function(req, res) {
    
    let obj = {
        tytul: req.body['tytul'],
        tresc: req.body['tresc'],
    }

    listaWpisow.push(obj)
    res.redirect("/")
})

app.get("/usun/:id", function(req, res) {
    
    let wpis_id = req.params.id
    listaWpisow.splice(wpis_id, 1)

    res.redirect("/")
})

app.get("/edytuj/:id", function(req, res) {
    
    let wpis_id = req.params.id
    let tytul = listaWpisow[wpis_id].tytul
    let tresc = listaWpisow[wpis_id].tresc
    
    res.render("edytuj", {tytul: tytul, tresc: tresc})
})

app.post("/edytuj/:id", function(req, res) {
    
    let wpis_id = req.params.id

    let obj = {
        tytul: req.body['tytul'],
        tresc: req.body['tresc'],
    }

    listaWpisow[wpis_id].tytul = obj.tytul
    listaWpisow[wpis_id].tresc = obj.tresc
    res.redirect("/")
})