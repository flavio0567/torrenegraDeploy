// ===== Conttroler Projeto.JS ======
// ===== date:  20180323       ======
//
const mongoose    = require('mongoose');
const Projeto     = mongoose.model('Projeto');
const Apontamento = mongoose.model('Apontamento');

module.exports = { 
    list: (req, res) => {
        console.log("SERVER > CONTROLLER > projeto > list")
        Projeto.find({}).sort({ 'codigo': -1 })
            .then(projeto => res.json(projeto))
            .catch(error => console.log(error));
    },
    novo: (req, res) => {
        console.log("SERVER > CONTROLLER > projeto > novo > req.body", req.body);
        let projeto = new Projeto(req.body);
        projeto.save(function(err, result){
            if(err) {
                console.log('Ocorreu erro salvando projeto', err);
                res.json(err);
            } else { 
                console.log('sucesso savando projeto');
                res.json(result);
            }
        })
    },
    obterProjetoById: function(req, res) {
        console.log("SERVER > CONTROLLER > obterProjetoById > req.params.id", req.params.id);
        Projeto.findById({_id: req.params.id})
        .populate('apontamentos')
        // .populate({path: 'Restaurant', reviews: { sort: { 'starts': 1 } } })
        .then(projeto => res.json(projeto))
        .catch(error => console.log(error));
    },
    edit: (req, res) => {
        console.log("SERVER > CONTROLLER > projeto > edit > req.body", req.body);
        Projeto.findOne({
            _id: req.body._id
        }, function (err, eProduct) {
            if (err) {
                console.log('Ocorreu erro lendo projeto antes da edição', err);
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
        Projeto.findOne({_id: req.params.id})
        // .populate('reviews')
        .populate({path: 'Projeto', apontamentos: { sort: { 'inicio': -1 } } })
            .then(projeto => res.json(projeto))
            .catch(error => console.log(error));
    },
    encerrar: (req, res) => {
        Projeto.update( { _id: req.params.id }, { encerrado: true })
            .then(projeto => res.json(projeto))
            .catch(error => console.log(error));
    }
    


    // destroy: (req, res) => {
    //     Restaurant.findByIdAndRemove({_id: req.params.id})
    //         .then(restaurant => res.json(restaurant))
    //         .catch(error => console.log(error));
    // }

}