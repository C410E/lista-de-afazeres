const knex = require("../conexao");

const excluirTarefa = async (req, res) => {
    const { id } = req.params

    if (id < 0 || id.toString().includes(".") || id.toString().includes(",")) {
        return res.status(400).json({mensagem: "O id não pode ser um número negativo ou com virgula."});
    }
    try {

        const excluirTarefa = await knex("lista_de_afazeres").where({id}).del();

        if (!excluirTarefa) {
            return res.status(404).json({mensagem: "Nenhuma tarefa encontrada para esse id"});
        }

        return res.status(200).json({mensagem: "Tarefa exluida com sucesso"})
    } catch (error) {
        return res.status(500).json({mensagem: "Erro ao excluir tarefa"});
    }
}

module.exports = {
    excluirTarefa
}