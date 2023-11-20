const knex = require("../conexao");

const atualizarTarefa = async (req, res) => {
    const { id } = req.params;
    const { tarefa, tarefa_realizada} = req.body;

    if (tarefa_realizada !== undefined && typeof tarefa_realizada !== "boolean") {
        return res.status(400).json({mensagem: "tarefa_realizada só aceita valores booleanos"})
    }

    try {

        const tarefaAtualizada = await knex("lista_de_afazeres").where({ id })
        .update({
            tarefa, 
            tarefa_realizada
        });

        if (!tarefaAtualizada) {
            return res.status(400).json({mensagem: "Não foi possivel atualizar tarefa"});
        }

        return res.status(200).json({mensagem: "Tarefa atualizada com sucesso"});
    } catch (error) {
        console.log(error) 
        return res.status(500).json({mensagem: "Error ao atualizar tarefa"});
    }
}

module.exports = {
    atualizarTarefa
}