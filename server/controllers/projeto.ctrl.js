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
        }, function (err, eProjeto) {
            if (err) {
                console.log('Ocorreu erro lendo projeto antes da edição', err);
            } else { 
                eProjeto.descricao  = req.body.descricao;
                eProjeto._clienteId = req.body._clienteId;
                eProjeto.pedido     = req.body.pedido;
                eProjeto.horasPLC   = req.body.horasPLC;
                eProjeto.horasIHM   = req.body.horasIHM;
                eProjeto.valorTerceiros = req.body.valorTerceiros;   
                eProjeto.valorMateriais = req.body.valorMateriais; 
                eProjeto.valorViagens   = req.body.valorViagens;   
                eProjeto.save(function(err, result){
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
    apontamentos: (req, res) => {
        console.log("SERVER > CONTROLLER > apontamentos (list)")
        Apontamento.find({  })
            .populate('apontamentos') 
            .populate('apontamentos', {
                "path": "apontamentos.fim",
                "match": {"apontamentos.fim": { "$eq": ""}
            }})
            .exec(function (err, apontamento) {
                if (err) return handleError(err);
                console.log('Os apontamentos são %s', apontamento);
                res.json(apontamento);
                })
    },
    apontamentoNovo: (req, res) => {
        console.log("SERVER > CONTROLLER > apontamentoNovo > req.params.id > req.body ", req.params.id, req.body);
        Projeto.findOne({_id: req.params.id}, function (err, projeto){
            let apontamento = new Apontamento(req.body);
            apontamento._projeto = req.params.id;
            projeto.apontamentos = projeto.apontamentos.concat([apontamento]);            
            apontamento.save(function(err, apontamento){
                if(err){
                    console.log('error saving apontamento ');
                    res.json(err);
                } else {
                    projeto.save(function(err, projeto){
                        if(err){
                            console.log('Erro salvando projeto ', err);
                            res.json(err);
                        } else {
                            console.log('Apontamento registrado com sucesso!');
                            res.json(apontamento);
                        };
                    });
                };
            });
        });
    },

    encerrar: (req, res) => {
        console.log("SERVER > CONTROLLER > encerrar projeto > req.params.id  ", req.params.id);
        Projeto.update( { _id: req.params.id }, { encerrado: true })
            .then(projeto => res.json(projeto))
            .catch(error => console.log(error));
    },
    
    // delete: (req, res) => {
    //     Proejto.findByIdAndRemove({_id: req.params.id})
    //         .then(restaurant => res.json(restaurant))
    //         .catch(error => console.log(error));
    // }

}