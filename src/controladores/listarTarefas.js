const knex = require("../conexao");

const listarTarefas = async (req, res) => {
    try {
        const tarefas = await knex("lista_de_afazeres");

        if (!tarefas) {
            return res.status(401).json({çmensagem: "Nenhuma tarefa cadastrada"});
        }

        return res.status(200).json(tarefas);
    } catch (error) {
        console.log(error)
        return res.status(500).json({mensagem: "Erro ao listar tarefas"});
    }
}

module.exports = {
    listarTarefas
}