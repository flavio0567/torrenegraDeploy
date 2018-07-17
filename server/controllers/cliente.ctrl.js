// ===== Conttroler cliente.ctrl.JS ======
// ===== date:  20180713            ======
//
const mongoose    = require('mongoose');
const Cliente     = mongoose.model('Cliente');
// const Apontamento = mongoose.model('Apontamento');

module.exports = { 
    list: (req, res) => {
        console.log("SERVER > CONTROLLER > cliente > list")
        Cliente.find({}).sort({ 'nome': 1 })
            .then(cliente => res.json(cliente))
            .catch(error => console.log(error));
    },
    novo: (req, res) => {
        console.log("SERVER > CONTROLLER > cliente > novo > req.body", req.body);
        let cliente = new Cliente(req.body);
        console.log('cliente.ctrl:', cliente);
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
        Projeto.findById({_id: req.params.id})
        .populate('projetos')
        // .populate({path: 'Restaurant', reviews: { sort: { 'starts': 1 } } })
        .then(cliente => res.json(cliente))
        .catch(error => console.log(error));
    },
    edit: (req, res) => {
        console.log("SERVER > CONTROLLER > edit > req.body", req.body);
        Cliente.findOne({
            _id: req.body._id
        }, function (err, eCliente) {
            if (err) {
                console.log('Ocorreu erro lendo cliente antes da edição', err);
            } else { 
                eProduct.descricao = req.body.descricao;
                eProduct.cliente = req.body.cliente;
                eProduct.pedido = req.body.pedido;
                eProduct.horasPLC = req.body.horasPLC;
                eProduct.horasIHM = req.body.horasIHM;
                eProduct.valorTerceiros = req.body.valorTerceiros;   
                eProduct.valorMateriais = req.body.valorMateriais; 
                eProduct.valorViagens = req.body.valorViagens;   
                eProduct.save(function(err, result){
                    if(err) {
                        console.log('Ocorreu erro salvando projeto', err);
                        res.json(err);
                    } else { 
                        console.log('sucesso savando projeto');
                        res.json(result);
                    };
                });
            };
        });
    },
    apontamentoList: (req, res) => {
        console.log("SERVER > CONTROLLER > apontamentoList > req.body", req.body);
        Projeto.findOne({_id: req.params.id})
        // .populate('reviews')
        .populate({path: 'Projeto', apontamentos: { sort: { 'inicio': -1 } } })
            .then(projeto => res.json(projeto))
            .catch(error => console.log(error));
    },
    apontamentoNovo: (req, res) => {
        console.log("SERVER > CONTROLLER > apontamentonovo > req.body", req.body);
        // Projeto.findOne({_id: req.params.id})
        // // .populate('reviews')
        // .populate({path: 'Projeto', apontamentos: { sort: { 'inicio': -1 } } })
        //     .then(projeto => res.json(projeto))
        //     .catch(error => console.log(error));
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