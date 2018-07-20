// ===== Conttroler usuario.ctrl.JS ======
// ===== date:  20180718            ======
//
const mongoose = require('mongoose');
const Usuario  = mongoose.model('Usuario');

module.exports = { 
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
    obterUsuarioById: function(req, res) {
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
    // destroy: (req, res) => {
    //     Restaurant.findByIdAndRemove({_id: req.params.id})
    //         .then(restaurant => res.json(restaurant))
    //         .catch(error => console.log(error));
    // }
}