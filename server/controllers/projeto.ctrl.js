// ===== Conttroler Projeto.JS ======
// ===== date:  20180323       ======
//
const mongoose    = require('mongoose');
const Projeto     = mongoose.model('Projeto');
const Apontamento = mongoose.model('Apontamento');
const Cliente     = mongoose.model('Cliente');
const ClienteProjeto = mongoose.model('ClienteProjeto');
const ObjectId    = require('mongodb').ObjectID;


module.exports = { 
    list: (req, res) => {
        console.log("SERVER > CONTROLLER > projeto > list");
        Projeto.find({ situacao: { $in: [0, 1, 2 ] } }).sort({ 'codigo': -1 })
            .then(projeto => res.json(projeto))
            .catch(error => console.log(error));
    },
    projetosEstado: (req, res) => {
        console.log("SERVER > CONTROLLER > projeto > estados", req.body);
        Projeto.find({ situacao: { $in: req.body } }).sort({ 'codigo': -1 })
            .then(projeto => res.json(projeto))
            .catch(error => console.log(error));
    },
    novo: (req, res) => {
        console.log("SERVER > CONTROLLER > projeto > novo > req.body");
        let projeto = new Projeto(req.body);
        projeto.save(function(err, result){
            if(err) {
                console.log('Ocorreu erro salvando projeto', err);
                res.json(err);
            } else { 
                console.log('sucesso savando projeto');
                Cliente.findOne({ _id: req.body._clienteId }).then(cliente => {
                    let clienteProjeto = new ClienteProjeto({ codigo: req.body.codigo})
                    clienteProjeto._cliente = cliente._id;
                    cliente.clienteProjetos = cliente.clienteProjetos.concat([clienteProjeto]);    
                    cliente.save()
                        .then(cliente => {
                            clienteProjeto.save(function(err, cliente){
                                if(err){
                                    console.log('Erro salvando cliente ', err);
                                    res.json(err);
                                } else {
                                    console.log('Cliente salvo com sucesso after clienteProjeto!');
                                    res.json(cliente);
                                };
                            });
                        })
                        .catch(error => console.log(error));      
                    })
            }
        })
    },
    obterProjetoById: function(req, res) {
        console.log("SERVER > CONTROLLER > obterProjetoById ");
        Projeto.findById({_id: req.params.id})
        .populate('apontamentos')
        .then(projeto => res.json(projeto))
        .catch(error => console.log(error));
    },
    edit: (req, res) => {
        console.log("SERVER > CONTROLLER > projeto > edit");
        Projeto.findOne({
            _id: req.body._id
        }, function (err, eProjeto) {
            if (err) {
                console.log('Ocorreu erro lendo projeto antes da edição', err);
            } else { 
                eProjeto.descricao  = req.body.descricao;
                eProjeto._clienteId = req.body._clienteId;
                eProjeto.pedido     = req.body.pedido;
                eProjeto.valorPedido = req.body.valorPedido;   
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
    obterApontamentoHoraPorUsuario: (req, res) => {
        console.log("SERVER > CONTROLLER > obterApontamentoHoraPorUsuario");
        // Apontamento.find({ $and: [ { tipo : { $eq: ['hora'] } }, { 'hora.inicio': { $ne: [''] } }, { 'hora.fim': { $eq: [''] }}, { usuario: { $eq: ['usuario']} } ] })
        // Apontamento.find({ $and: [ { 'hora.inicio': { $ne: [''] } }, { 'hora.fim': { $eq: [''] }}, { usuario: { $eq: [req.query.usuario]} } ] })
        Apontamento.find({ tipo : 'hora', 'hora.fim': '', usuario: req.query.usuario })
            .populate('apontamentos') 
            .exec(function (err, apontamento) {
                if (err) return handleError(err);
                console.log('sucesso obtendo apontamentos ');
                res.json(apontamento);
            })
    },
    obterApontamento: (req, res) => {
        console.log("SERVER > CONTROLLER > obterApontamento > req.body", req.body);
        // console.log('projeto: ', ObjectId(req.body._projetoId), 'email:', req.body.email, 'data1:', req.body.data1, 'data2:', req.body.data2);
        if (req.body._projetoId) {
            // Apontamento.find({ $and: [ { usuario: {$eq: req.query.email }}, { _projeto: ObjectId(req.query._projetoId) }, { tipo : 'hora' }, { 'hora.inicio': { $gte: req.query.data1 }  },  { 'hora.inicio': { $lte: req.query.data2 }  }, { 'hora.fim': { $ne: [''] }} ] })
            // Apontamento.find({ $and: [ { usuario: {$eq: req.body.email }}, { _projeto: ObjectId(req.body._projetoId) }, { tipo : req.body.tipo } ] })
            Apontamento.find({tipo : req.body.tipo,  usuario: {$eq: req.body.email}, _projeto: ObjectId(req.body._projetoId), 'hora.inicio': { $gte: (req.body.data1), $lte: (req.body.data2) }  })
            .populate('apontamentos') 
            .exec(function (err, apontamento) {
                console.log('Os apontamentos são %s', apontamento);
                res.json(apontamento);
            })
            .catch(error => console.log(error));  
        } else {
            // Apontamento.find({ $and: [ { usuario: {$eq: req.query.email }}, { _projeto: req.query._projetoId }, { tipo : 'hora' }, { 'hora.inicio': { $gte: req.query.data1 }  },  { 'hora.inicio': { $lte: req.query.data2 }  }, { 'hora.fim': { $ne: [''] }} ] })
            Apontamento.find({ $and: [ { usuario: {$eq: req.body.email }}, { tipo : req.body.tipo }, { 'hora.inicio': { $gte: (req.body.data1), $lte: (req.body.data2) } } ] })
                .populate('apontamentos') 
                .exec(function (err, apontamento) {
                    // if (err) return handleError(err);
                    console.log('sucesso obtendo apontamentos hora ');
                    res.json(apontamento);
                })
                .catch(error => console.log(error));
        }
    },
    obterApontamentoDespesaPorUsuario: (req, res) => {
        console.log("SERVER > CONTROLLER > obterApontamentoDespesaPorUsuario", req.body);
        // Apontamento.find({ $and: [ { tipo : { $eq: ['despesa'] } }, { usuario: { $eq: [req.query.usuario]} } ] } )
        if (req.body._projetoId) {
            Apontamento.find({tipo : req.body.tipo,  usuario: {$eq: req.body.email}, _projeto: ObjectId(req.body._projetoId), 'despesa.data': { $gte: (req.body.data1), $lte: (req.body.data2) }  })
            .populate('apontamentos') 
            .exec(function (err, apontamento) {
                console.log('Os apontamentos são %s', apontamento);
                res.json(apontamento);
            })
            .catch(error => console.log(error));  
        } else {
            Apontamento.find({ $and: [ { usuario: {$eq: req.body.email }}, { tipo : req.body.tipo }, { 'despesa.data': { $gte: (req.body.data1), $lte: (req.body.data2) } } ] })
                .populate('apontamentos') 
                .exec(function (err, apontamento) {
                    // if (err) return handleError(err);
                    console.log('sucesso obtendo apontamentos despesa ');
                    res.json(apontamento);
                })
                .catch(error => console.log(error));
        }
    },
    obterApontamentoTotal: (req, res) => {
        console.log("SERVER > CONTROLLER > obterApontamentoTotalHora");
        Apontamento.find( { $and: [{ _projeto: req.params.id }, { $or: [{ tipo: 'hora'}, { 'hora.fim' : { $ne: '' } },  {tipo: 'despesa'} ] }  ] } )
            .then(apontamentos => res.json(apontamentos))
            .catch(error => console.log(error));
    },
    apontamentoNovo: (req, res) => {
        console.log("SERVER > CONTROLLER > apontamentoNovo ");
        Projeto.findOne({_id: req.params.id}, function (err, projeto){
            let apontamento = new Apontamento(req.body);
            apontamento._projeto = req.params.id;
            projeto.apontamentos = projeto.apontamentos.concat([apontamento]);            
            apontamento.save(function(err, apontamento){
                if(err){
                    console.log('Ocorreu um erro salvando apontamento ', err);
                    res.json(err);
                } else {
                    projeto.save(function(err, projeto){
                        if(err){
                            console.log('Erro salvando projeto após apontamento', err);
                            res.json(err);
                        } else {
                            console.log('Apontamento registrado com sucesso!');
                            res.json(projeto);
                        };
                    });
                };
            });
        });
    },

    mudarSituacaoProjeto: (req, res) => {
        console.log("SERVER > CONTROLLER > mudarSituacao projeto");
        Projeto.update( { _id: req.params.id }, { situacao: req.body })
            .then(projeto => res.json(projeto))
            .catch(error => console.log(error));
    },
    

    encerrarApontamento: (req, res) => {
        console.log("SERVER > CONTROLLER > encerrar apontamento " );
        Apontamento.findOneAndUpdate( { _id: req.params.id }, { 'hora.fim': req.body.fim  })
            .then(projeto => res.json(projeto))
            .catch(error => console.log(error));
    }

}