// ===== Conttroler usuario.ctrl.JS ======
// ===== date:  20180718            ======
//
const mongoose   = require('mongoose');
const Usuario    = mongoose.model('Usuario');

module.exports = { 
    login: function(req, res) {
        console.log("SERVER > CONTROLLER > login" );
        let email = req.body.usuario;
        let senha = req.body.senha;
        Usuario.findOne({ email: email })
        .then(usuario => {
            if(!usuario) { 
                return res.send({
                    message: "Usuário não encontrado para o email "
                });
            }
            usuario.compareSenha(senha, function (err, isMatch) {
                if (isMatch && !err) {
                    const result = {
                        success: true,
                        ativo: usuario.ativo,
                        admin: usuario.admin,
                    }
                    res.send(result);
                } else {
                    return res.send({
                        message: 'Falha na autenticação: '  + email
                    });
                }
            });
        })
        .catch(err => {
        if(err.kind === 'ObjectId') {
            return res.send({
                message: 'Usuario nao encontrado '+ email
            });                
        }
        return res.send({
            message: 'Erro da captura do usuario'
        });
        });
    },
    list: (req, res) => {
        console.log("SERVER > CONTROLLER > usuario > list");
        Usuario.find({}).sort({ 'nome': 1 })
            .then(usuario => res.json(usuario))
            .catch(error => console.log(error));
    },
    novo: (req, res) => {
        console.log("SERVER > CONTROLLER > usuario > novo  " );
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
    obterUsuario: (req, res) => {
        console.log("SERVER > CONTROLLER > obterUsario  " );
        Usuario.findOne({email: req.query.usuario })
        .then(usuario => res.json(usuario))
        .catch(error => console.log(error));
    },
    obterUsuarioById: (req, res) => {
        console.log("SERVER > CONTROLLER > obterUsarioById  " );
        Usuario.findById({_id: req.params.id})
        .then(usuario => res.json(usuario))
        .catch(error => console.log(error));
    },
    edit: (req, res) => {
        console.log("SERVER > CONTROLLER > usuario > edit " );
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
    register: (req, res) => {
        console.log("SERVER > CONTROLLER > usuario > register  " );
        if (!req.body.user || !req.body.senha) {
            res.json({success: false, message: 'Por favor, inforne e-mail e senha!'});
        } else {
            Usuario.findOne({
                email: req.body.user
            }, function (err, usuario) {
                if (err) {
                    console.log('Ocorreu erro lendo cliente antes do registro', err);
                } else {
                    if(usuario) {
                        if (usuario.ativo === "ativo") {
                            return res.json({success: false, message: 'Usuário já ativado!', result: {}});
                        }
                        usuario.compareSenha(req.body.senha, function (err, isMatch) {
                            if (isMatch && !err) {
                                usuario.senha = req.body.novaSenha;
                                usuario.ativo = 'ativo';
                                usuario.save(function(err, result){
                                    if(err) {
                                        console.log('Ocorreu erro salvando usuario', err);
                                        return res.json({success: false, message: 'Ocorreu erro salvando usuario!'});
                                    } else { 
                                        console.log('sucesso salvando usuario');
                                        res.json({success: true, message: 'Sucesso, usuário registrado!', result: {ativo: usuario.ativo, admin: usuario.admin}});
                                    }
                                })
                            } else {
                                return res.send({
                                    message: 'Falha na autenticação: '  + req.body.user
                                });
                            }
                        });
                        if (usuario.ativo === "ativo") {
                            return res.json({success: false, message: 'Usuário já ativado!', result: {}});
                        }
                    } else { 
                        console.log('error salvando usuario' );
                        res.json({success: false, message: 'Falha, Usuário não encontrado!', result: {}});
                    }
                } 
            });
        }
    },  
    mudarSituacaoUsuario: (req, res) => {
        console.log("SERVER > CONTROLLER > usuario > mudarSituacaoUsuario" );
        Usuario.findOneAndUpdate({_id: req.params.id},{$set:{ativo: req.body.ativo}})
            .then(usuario => res.json(usuario))
            .catch(error => console.log(error));
    }
}