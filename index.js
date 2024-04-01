<<<<<<< HEAD
const express = require("express");
const knexConfig = require("./conection"); // Certifique-se de que este arquivo contém a configuração correta do Knex
const knex = require("knex");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(
  cors({
    origin: "https://lfconsultoria.vercel.app", // Substitua pelo domínio real do seu site na Netlify
  })
);
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

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
=======
const express = require("express");
const knexConfig = require("./conection"); // Certifique-se de que este arquivo contém a configuração correta do Knex
const knex = require("knex");

const app = express();

app.use(express.json());
const db = knex(knexConfig);

app.post("/submit", async (req, res) => {
  const { nomeCompleto, email, celular, cpf, regiao } = req.body;
  try {
    await db("clientes").insert({ nomeCompleto, email, celular, cpf, regiao });
    res.json({ message: "Dados enviados!" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send("Ocorreu um erro ao inserir os dados no banco de dados.");
  }
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
>>>>>>> 965961549e8370ba706c173dd56618f15eb4db05
