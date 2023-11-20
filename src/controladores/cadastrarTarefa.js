const knex = require("../conexao");

const cadastrarTarefa = async (req, res) => {
    const { tarefa, tarefa_realizada} = req.body

    if (!tarefa) {
        return res.status(400).json({mensagem: "A tarefa não pode estar vazia"});
    }

    if (typeof tarefa_realizada !== "boolean") {
        return res.status(400).json({mensagem: "tarefa_realizada só aceita valores booleanos"})
    }

    try {
        const postarTarefa = await knex("lista_de_afazeres").insert({
            tarefa,
            tarefa_realizada
        })  

        if (!postarTarefa) {
            return res.status(400).json({mensagem: "não foi possivel cadastrar tarefa"})
        }

        return res.status(200).json({mensagem: "Tarefa cadastrada com sucesso"})
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({mensagem: "Erro ao cadastrar tarefa"});
    }
}

module.exports = {
    cadastrarTarefa
}