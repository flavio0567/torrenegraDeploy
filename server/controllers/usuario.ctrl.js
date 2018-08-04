// ===== Conttroler usuario.ctrl.JS ======
// ===== date:  20180718            ======
//
const mongoose = require('mongoose');
const Usuario  = mongoose.model('Usuario');

module.exports = { 
    login: function(req, res) {
        console.log("SERVER > CONTROLLER > login > req.query", req.query.usuario);
        Usuario.findOne({ email: req.query.usuario })
        .then(usuario => {
            if(!usuario) {
                return res.status(404).send({
                    message: "Usuário não encontrado para o email " + req.query.usuario
                });
            }
            let result = {
                email: usuario.email,
                ativo: usuario.ativo,
                admin: usuario.admin
            }
            res.send(result);
        })
        .catch(err => {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.noteId
                });                
            }
            return res.status(500).send({
                message: "Error retrieving note with id " + req.params.noteId
            });
        });
    },
    list: (req, res) => {
        console.log("SERVER > CONTROLLER > usuario > list")
        Usuario.find({}).sort({ 'nome': 1 })
            .then(usuario => res.json(usuario))
            .catch(error => console.log(error));
    },
    novo: (req, res) => {
        console.log("SERVER > CONTROLLER > usuario > novo > req.body", req.body);
        let usuario = new Usuario(req.body);
        usuario.save(function(err, result){
            if(err) {
                console.log('Ocorreu erro salvando usuario', err);
                res.json(err);
            } else { 
                console.log('sucesso savando usuario');
                res.json(result);
            }
        })
    },
    obterUsuarioById: (req, res) => {
        console.log("SERVER > CONTROLLER > obterUsarioById > req.params.id", req.params.id);
        Usuario.findById({_id: req.params.id})
        .then(usuario => res.json(usuario))
        .catch(error => console.log(error));
    },
    edit: (req, res) => {
        console.log("SERVER > CONTROLLER > usuario > edit > req.body", req.body);
        Usuario.findOne({
            _id: req.body._id
        }, function (err, eUsuario) {
            if (err) {
                console.log('Ocorreu erro lendo cliente antes da edição', err);
            } else { 
                eUsuario.nome = req.body.nome;
                eUsuario.sobrenome = req.body.sobrenome;
                eUsuario.email = req.body.email;
                eUsuario.funcao = req.body.funcao;
                eUsuario.custoHora = req.body.custoHora;
                eUsuario.admin = req.body.admin;
                eUsuario.save(function(err, result){
                    if(err) {
                        console.log('Ocorreu erro salvando usuario', err);
                        res.json(err);
                    } else { 
                        console.log('sucesso salvando usuario');
                        res.json(result);
                    };
                });
            };
        });
    },    
    mudarSituacao: (req, res) => {
        console.log("SERVER > CONTROLLER > usuario > mudarSituacao > req.params.id", req.params.id, req.body);
        Usuario.findOneAndUpdate({_id: req.params.id},{$set:{ativo: req.body.ativo}})
            .then(usuario => res.json(usuario))
            .catch(error => console.log(error));
    }
}