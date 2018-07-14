// ===== Model projeto    ======
// ===== date: 2018-07-11 ======
// define Schema
const mongoose   = require('mongoose'),
      Schema     = mongoose.Schema, 
uniqueValidator  = require('mongoose-unique-validator');

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
    cliente: {
        type: String,
        required: [true, "Favor informar o Cliente do projeto"]
    },
    pedido: {
        type: Number,
        required: [true, "Favor informar o número do Pedido do projeto"],
        trim: true
    },
    horasPLC: {
        type: Number,
        required: [true, "Favor informar Horas PLC do projeto"],
        min: 10,
        max: 5000,
    },
    horasIHM: {
        type: Number,
        required: [true, "Favor informar Horas IHM do projeto"],
        min: 10,
        max: 5000,
    },
    valorTerceiros: {
        type: Number,
        min: 0,
        max: 500000,
    },
    valorMateriais: {
        type: Number,
        min: 0,
        max: 100000,
    },
    valorViagens: {
        type: Number,
        min: 0,
        max: 5000,
    },
    bloquearApontamento: {                 
        type: Boolean, default: false
    },
    encerrado: {
        type: Boolean, default: false
    },
    apontamentos: [{type: Schema.Types.ObjectId, ref: 'Apontamento'}]
    }, { timestamps: true }, 
       { autoIndex: false },
       { usePushEach: true }
);
 // define Apontamento Schema
var ApontamentoSchema = new mongoose.Schema({
    _projeto: {type: Schema.Types.ObjectId, ref: 'Projeto'},
    usuario: String,
    hora: {                              
        inicio: {
            type: Date
        },
        fim: {
            type: Date
        }
    },
    despesa: {
        descricao: {                 
            type: String,
            minlength: 3,
        },
        valor: {
            type: Number,
            min: 10,
            max: 50,
            validate: {
                validator: function( value ) {
                    return /[10-50]/.test( value );
                },
                message: "Valor da despesa deve estar entre 10 e 50 reais",
            }
        }
    },
    // tipo: {                              
    //     type: String,
    // },
    // descricaoDespesa: {                 
    //     type: String,
    //     minlength: 3,
    // },
    // valorDespesa: {
    //     type: Number,
    //     min: 10,
    //     max: 50,
    //     validate: {
    //         validator: function( value ) {
    //             return /[10-50]/.test( value );
    //         },
    //         message: "Valor da despesa deve estar entre 10 e 50 reais",
    //       }
    // },
    // horaInicio: {
    //     type: Date
    // },
    // horaFim: {
    //     type: Date
    // }
    }, { timestamps: true }, 
        { autoIndex: false },
        { usePushEach: true }
);

// set model by passing his Schema
mongoose.model('Projeto', ProjetoSchema);
mongoose.model('Apontamento', ApontamentoSchema);

ProjetoSchema.plugin(uniqueValidator, {message: 'Projeto já cadastrado.'});

// stored model in variable
const Projeto = mongoose.model('Projeto');
const Apontamento = mongoose.model('Apontamento');