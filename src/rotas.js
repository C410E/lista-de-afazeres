const express = require("express");
const { listarTarefas } = require("./controladores/listarTarefas");
const { cadastrarTarefa } = require("./controladores/cadastrarTarefa");

const rotas = express();

rotas.get("/tarefas", listarTarefas);

rotas.post("/cadastrar-tarefa", cadastrarTarefa);

module.exports = rotas;