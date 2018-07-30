// ===== Conttroler cliente.ctrl.JS ======
// ===== date:  20180713            ======
//
const mongoose = require('mongoose'),
      Cliente  = mongoose.model('Cliente');

// const Apontamento = mongoose.model('Apontamento');

module.exports = { 
    list: (req, res) => {
        console.log("SERVER > CONTROLLER > cliente > list")
        Cliente.find({}).sort({ 'razaoSocial': 1 })
            .then(cliente => res.json(cliente))
            .catch(error => console.log(error));
    },
    novo: (req, res) => {
        console.log("SERVER > CONTROLLER > cliente > novo > req.body", req.body);
        let cliente = new Cliente(req.body);
        console.log('cliente and endereco in ctrl: >>>> >>>> >>>>', cliente);
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
        console.log("SERVER > CONTROLLER > obterClienteById > req.params.id", req.params.id);
        Cliente.findById({_id: req.params.id})
        .populate('clienteProjetos')
        // .populate({path: 'Restaurant', reviews: { sort: { 'starts': 1 } } })
        .then(cliente => res.json(cliente))
        .catch(error => console.log(error));
    },
    edit: (req, res) => {
        console.log("SERVER > CONTROLLER > cliente > edit > req.params._id > req.body", req.params.id, req.body);
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
                eCliente.endereco.cidade = req.body.endereco.cidade; 
                eCliente.endereco.estado = req.body.endereco.estado;
                eCliente.endereco.cep = req.body.endereco.cep;
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
    encerrar: (req, res) => {
        Projeto.update( { _id: req.params.id }, { encerrado: true })
            .then(projeto => res.json(projeto))
            .catch(error => console.log(error));
    },
    
    // destroy: (req, res) => {
    //     Restaurant.findByIdAndRemove({_id: req.params.id})
    //         .then(restaurant => res.json(restaurant))
    //         .catch(error => console.log(error));
    // }

}