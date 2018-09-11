// ===== Model projeto    ======
// ===== date: 2018-07-11 ======
// define Schema
const mongoose   = require('mongoose'),
      Schema     = mongoose.Schema, 
uniqueValidator  = require('mongoose-unique-validator');
mongoose.plugin(schema => { schema.options.usePushEach = true });

const ProjetoSchema = new Schema({
    codigo: {
        type: String,
        required: [true, "Código do projeto é requerido"],
        unique: true,
        minlength: 7,
        trim: true
    },
    descricao: {
        type: String,
        required: [true, "Descrição do projeto é requerida"],
        minlength: 3,
        trim: true
    },  
    _clienteId: {
        type: Schema.Types.ObjectId,
        required: [true, "Cliente do projeto é requerido"]
    },
    pedido: {
        type: String,
        required: [true, "Pedido do projeto é requerido"],
        trim: true
    },
    valorPedido: {
        type: Number
        // required: [true, "Valor do pedido do projeto é requerido"]
    },
    horasPLC: {
        type: Number,
        required: [true, "Horas PLC do projeto são requeridas"]
        // min: 10,
        // max: 5000,
    },
    horasIHM: {
        type: Number
        // min: 10,
        // max: 5000,
    },
    valorTerceiros: {
        type: Number,
        // min: 0,
        // max: 500000,
    },
    valorMateriais: {
        type: Number,
        // min: 0,
        // max: 100000,
    },
    valorViagens: {
        type: Number,
        // min: 0,
        // max: 5000,
    },
    bloquearApontamento: {                 
        type: Boolean, default: false
    },
    situacao: {
        type: Number,
        min: 0,
        max: 5,
        default: 0
    },
    updated: { 
        type: Date, default: Date.now 
    },
    apontamentos: [{type: Schema.Types.ObjectId, ref: 'Apontamento'}]
    }, { timestamps: true },
       { usePushEach: true }
);
 // define Apontamento Schema
var ApontamentoSchema = new mongoose.Schema({
    _projeto: {type: Schema.Types.ObjectId, ref: 'Projeto'},
    tipo: {                              
        type: String,
    },
    usuario: {
        type: String,
    },
    valorHH: {
        type: Number
    },
    hora: {                              
        inicio: {
            type: String
        },
        fim: {
            type: String
        }
    },
    despesa: {
        descricao: {                 
            type: String
        },
        valor: {
            type: Number
        },
        data: {
            type: String
        },
        reembolso: {
            type: Boolean
        },
    },
    }, { timestamps: true }, 
        { autoIndex: false }
);

// set model by passing his Schema
mongoose.model('Projeto', ProjetoSchema);
mongoose.model('Apontamento', ApontamentoSchema);

ProjetoSchema.plugin(uniqueValidator, {message: 'Projeto já cadastrado.'});

// stored model in variable
const Projeto = mongoose.model('Projeto');
const Apontamento = mongoose.model('Apontamento');