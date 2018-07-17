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
        type: String,
        required: [true, "Endereço é requerido"],
        minlength: 6
    },
    contatos: [
        // title: String,
        // value: String
        // nome: {
        //     type: String,
        //     // required: [true, "Favor informar o primeiro contato do cliente"],
        //     minlength: 3
        // },
        // email: {
        //     type: String,
        //     trim: true,
        //     unique: [true, 'E-mail em uso'],
        //     uniqueCaseInsensitive: true,
        //     // required: [true,'E-mail do primeiro contato é requerido'],
        //     validate: {
        //     validator: function( value ) {
        //     return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test( value );
        //     },
        //     message: "Por favor, informe um endereço de e-mail válido",
        //     }
        // },
        // telefone: {
        //     type: Number,
        //     // required: [true, "Telefone do primeiro contato do cliente é requerido"],
        // },
        // skype: {
        //     type:String
        // },
    ],
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