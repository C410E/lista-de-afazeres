const knex = require("../conexao");

const listarTarefaPorId = async (req, res) => {
    const { id } = req.params;

    if (id < 0 || id.toString().includes(".") || id.toString().includes(",")) {
        return res.status(400).json({mensagem: "O id não pode ser um número negativo ou com virgula."});
    }

    try {

        const tarefas = await knex("lista_de_afazeres").where({ id })
        .first();

        if (!tarefas) {
            return res.status(404).json({mensagem: "Nenhuma tarefa encontrada para esse id"});
        }

        return res.status(200).json(tarefas)

    } catch (error) {
        console.log(error)
        return res.status(500).json({mensagem: "Erro ao listar tarefa pelo identificador"});
    }
}

module.exports = {
    listarTarefaPorId
}