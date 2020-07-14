const { validationResult } = require("express-validator/check");

module.exports.iniciaChat = function (application, req, res){

    const dadosForm = req.body;

    req.assert('apelido', 'Nome ou apelido é obrigatorio').notEmpty();
    req.assert('apelido', 'Nome ou apelido obrigatoriamente deve conter de 3 a 15 caracteres').len(3,15);

    const erros = req.validationErrors();

    if(erros){
        res.render("index", {validacao: erros}) 
        return ;
    }

    res.render('chat')
}