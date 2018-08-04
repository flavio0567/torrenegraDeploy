// ===== usuario.JS       ======
// ===== date: 2018-07-11 ======
// define Schema
const mongoose   = require('mongoose'),
      Schema     = mongoose.Schema, 
uniqueValidator  = require('mongoose-unique-validator');

 // define user Schema
 var UsuarioSchema = new mongoose.Schema({
    nome: {
        type: String, 
        required: [true, "Nome do usuário é requerido"],
        minlength: 2 
    },
    sobrenome: {
        type: String, 
        required: [true, "Sobrenome do usuário é requerido"],
        minlength: 2 
    },
    funcao: {
        type: String, 
        required: [true, "Função do usuário é requerida"],
        minlength: 4  
    },
    custoHora: {
        type: Number, 
        required: [true, "Custo/hora do usuário é requerido"],
        min: 10 
    },
    email: {
        type: String, 
        trim: true,
        unique: true,
        uniqueCaseInsensitive: true,
        required: [true,'Email é requerido'],
        validate: {
          validator: function( value ) {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test( value );
          },
          message: "Por favor, utilize um endereço de e-mail válido",
        },
    },
    senha: {
        type: String, 
        default: "torrenegra123",
        minlength: 8,
        maxlength: 256,
        // validate: {
        //     validator: function( value ) {
        //     return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test( value );
        //     },
        //     message: "Senha inválida, informe ao menos um número, uma letra maiúscula e um caracter especial"
        //     }
        },
    admin: {
        type: Boolean,
        default: false
    },
    ativo: {
        type: Boolean,
        default: true
    },
    }, { timestamps: true },
       { autoIndex: false }
);

// set model by passing his Schema
mongoose.model('Usuario', UsuarioSchema);

UsuarioSchema.plugin(uniqueValidator, {message: 'E-mail já cadastrado.'});
// stored model in variable
const Usuario = mongoose.model('Usuario');
