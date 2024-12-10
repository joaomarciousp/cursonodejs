const express = require("express");
const app = express();

//USAR O EJS
app.set("view engine", "ejs");
app.use(express.static('public'))



app.get("/", (req, res) => {
res.render('index')
});

app.get("/perguntar", (req, res) => {
    res.render('perguntar')
    });
    

//ABRINDO SERVIDOR
app.listen(3000, () => {
  console.log("Server rodando na porta 3000");
});
