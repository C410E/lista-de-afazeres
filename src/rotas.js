const express = require("express");
const { listarTarefas } = require("./controladores/listarTarefas");
const { cadastrarTarefa } = require("./controladores/cadastrarTarefa");
const { atualizarTarefa } = require("./controladores/atualizarTarefa");
const { listarTarefaPorId } = require("./controladores/listarTarefaPorId");
const { excluirTarefa } = require("./controladores/excluirTarefa");

const rotas = express();

rotas.get("/listar-tarefa", listarTarefas);

rotas.post("/cadastrar-tarefa", cadastrarTarefa);

rotas.patch("/atualizar-tarefa/:id", atualizarTarefa);

rotas.get("/listar-tarefa/:id", listarTarefaPorId);

rotas.delete("/excluir-tarefa/:id", excluirTarefa);

module.exports = rotas;