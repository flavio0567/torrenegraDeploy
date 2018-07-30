// ===== cliente.JS        ======
// ===== date: 2018-07-11  ======
// define Schema
const mongoose   = require('mongoose'),
      Schema     = mongoose.Schema, 
uniqueValidator  = require('mongoose-unique-validator');

const ClienteSchema = new Schema({
    cnpj: {
        type: Number,
        required: [true, "CNPJ do cliente é requerido"],
        unique: true,
        minlength: 11,
        trim: true
    },
    razaoSocial: {
        type: String,
        required: [true, "Razão Social do cliente é requerida"],
        minlength: 3
    },
    nomeFantasia: {
        type: String,
        required: [true, "Nome fantasia do cliente é requerida"],
        minlength: 2
    },
    endereco: {
        logradouro: { 
            type: String, 
            required: [true, "Logradouro é requerido"]
         },
        complemento: { 
            type: String
        },
        cidade: { 
            type: String, 
            required:[true, "Cidade é requerida"] 
        },
        estado: { 
            type: String, 
            required:[true, "Estado é requerido"],
            maxlength: 2 
        },
        cep: { 
            type: Number, 
            required:[true, "CEP é requerido"] 
        },
    },
    valorHH: {
        type: Number,
    },
    prazoPgto: {
        type: Number
    },
    contatos: []
    ,
    clienteProjetos: [{type: Schema.Types.ObjectId, ref: 'ClienteProjeto'}]
    }, { timestamps: true }, 
       { autoIndex: false }
);
 // define review Schema
const ClienteProjetoSchema = new mongoose.Schema({
    _cliente: {type: Schema.Types.ObjectId, ref: 'Cliente'},
    codigo: {
        type: String,
        minlength: 7 
    }
   }, { timestamps: true }, 
      { autoIndex: false }
);

// set model by passing his Schema
mongoose.model('Cliente', ClienteSchema);
mongoose.model('ClienteProjeto', ClienteProjetoSchema);

ClienteSchema.plugin(uniqueValidator, {message: 'cliente já cadastrado.'});

// stored model in variable
const Cliente = mongoose.model('Cliente');
const ClienteProjeto = mongoose.model('ClienteProjeto');