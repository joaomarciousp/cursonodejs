const express = require("express");
const app = express();

//USAR O EJS
app.set("view engine", "ejs");

const alunos = [
    { 
      nome: "joao", 
      nota: 5 
    },
    {
      nome:"Maria",
      nota:10
    }

];

app.get("/", (req, res) => {
  const nome = "João";
  const lang = "NODEJS";
  const exibirMsg = false;

  res.render("index", {
    nome: nome,
    lang: lang,
    msg: exibirMsg,
    alunos: alunos
  });
});

//ABRINDO SERVIDOR
app.listen(3000, () => {
  console.log("Server rodando na porta 3000");
});
