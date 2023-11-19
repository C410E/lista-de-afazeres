const express = require("express");
const { listarTarefas } = require("./controladores/listarTarefas");

const rotas = express();

rotas.get("/tarefas", listarTarefas);

module.exports = rotas;