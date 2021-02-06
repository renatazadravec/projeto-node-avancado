var knex = require("../database/connection");

class homeController {
  //metodos
  async index(req, res) {

   

    const result = await knex.table("pessoas");

    const pessoas = []

    result.map(item=>{
      return pessoas.push({
        nome: item.nome,
        idade: item.idade
      })
    })

    res.render("index", {pessoas :  pessoas});
  }

  async criar(req, res) {
    const {body} = req;

    await  knex('pessoas').insert(body)

    const result = await knex.table("pessoas");

    const pessoas = []

    result.map(item=>{
      return pessoas.push({
        nome: item.nome,
        idade: item.idade
      })
    })

    res.render("index", {pessoas :  pessoas});
  }
}

module.exports = new homeController();
