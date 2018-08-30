// ===== Conttroler cliente.ctrl.JS ======
// ===== date:  20180713            ======
//
const mongoose = require('mongoose'),
      Cliente  = mongoose.model('Cliente');

module.exports = { 
    list: (req, res) => {
        console.log("SERVER > CONTROLLER > cliente > list")
        Cliente.find({}).sort({ 'razaoSocial': 1 })
            .then(cliente => res.json(cliente))
            .catch(error => console.log(error));
    },
    novo: (req, res) => {
        console.log("SERVER > CONTROLLER > cliente > novo" );
        let cliente = new Cliente(req.body);
        cliente.save(function(err, result){
            if(err) {
                console.log('Ocorreu erro salvando cliente', err);
                res.json(err);
            } else { 
                console.log('sucesso savando cliente');
                res.json(result);
            }
        })
    },
    obterClienteById: function(req, res) {
        console.log("SERVER > CONTROLLER > obterClienteById  " );
        Cliente.findById({_id: req.params.id})
        .populate('clienteProjetos')
        .then(cliente => res.json(cliente))
        .catch(error => console.log(error));
    },
    edit: (req, res) => {
        console.log("SERVER > CONTROLLER > cliente > edit  " );
        Cliente.findOne({
            _id: req.params.id
        }, function (err, eCliente) {
            if (err) {
                console.log('Ocorreu erro lendo cliente antes da edição', err);
            } else { 
                eCliente.cnpj = req.body.cnpj;
                eCliente.razaoSocial = req.body.razaoSocial;
                eCliente.nomeFantasia = req.body.nomeFantasia;
                eCliente.valorHH = req.body.valorHH; 
                eCliente.prazoPgto = req.body.prazoPgto; 
                eCliente.endereco.logradouro = req.body.endereco.logradouro;
                eCliente.endereco.complemento = req.body.endereco.complemento;  
                eCliente.endereco.cidade = req.body.endereco.cidade; 
                eCliente.endereco.estado = req.body.endereco.estado;
                eCliente.endereco.cep = req.body.endereco.cep;
                eCliente.contatos = req.body.contatos;
                eCliente.save(function(err, result){
                    if(err) {
                        console.log('Ocorreu erro editando cliente', err);
                        res.json(err);
                    } else { 
                        console.log('sucesso editando cliente');
                        res.json(result);
                    };
                });
            };
        });
    },
    destroy: (req, res) => {
        console.log("SERVER > CONTROLLER > cliente > destroy   " );
        Cliente.findByIdAndRemove({_id: req.params.id})
            .then(cliente => res.json(cliente))
            .catch(error => console.log(error));
    }

}