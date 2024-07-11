let express = require("express");
let bodyParser = require("body-parser");

let app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.set("view engine", "ejs")
app.listen(8080)
console.log("Serwer zostal pomyslnie uruchomiony na porcie 8080")