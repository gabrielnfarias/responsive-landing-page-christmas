const express = require("express");
const knexConfig = require("./conection");
const knex = require("knex");
const bodyParser = require("body-parser");
const cors = require("cors");
const { log } = require("console");

const app = express();

app.use(express.json());
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = knex(knexConfig);

app.post("/submit", async (req, res) => {
  console.log(req.body);
  const { nome, email, celular, cpf, regiao } = req.body;
  try {
    await db("clientes").insert({ nome, email, celular, cpf, regiao });
    res.json({ message: "Dados enviados!" });
  } catch (error) {
    console.error(error.message);
    res
      .status(500)
      .send("Ocorreu um erro ao inserir os dados no banco de dados.");
  }
});
app.get("/submit", async (req, res) => {
  res.send("tudo kegal com o get");
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
