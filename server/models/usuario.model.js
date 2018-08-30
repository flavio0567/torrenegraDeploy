// ===== usuario.JS       ======
// ===== date: 2018-07-11 ======
// define Schema
const mongoose   = require('mongoose'),
      Schema     = mongoose.Schema, 
uniqueValidator  = require('mongoose-unique-validator');
const bcrypt     = require('bcrypt');

 // define user Schema
 var UsuarioSchema = new Schema({
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
        minlength: 8,
        maxlength: 256,
        },
    admin: {
        type: Boolean,
        default: false
    },
    ativo: {
        type: String,
        default: 'desativado'
    },
    }, { timestamps: true },
       { autoIndex: false }
);


UsuarioSchema.pre('save', function (next) {
    let usuario = this;
    if (this.isModified('senha') || this.isNew) {
        bcrypt.genSalt(10, function(err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt.hash(usuario.senha, salt, function(err, hash) {
                if (err) {
                    return next(err);
                } else {
                    usuario.senha = hash;
                    next();
                }
            });
        });
    } else {next();}
});

UsuarioSchema.methods.compareSenha = function (passw, cb) {
    bcrypt.compare(passw, this.senha, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};


mongoose.model('Usuario', UsuarioSchema);

UsuarioSchema.plugin(uniqueValidator, {message: 'E-mail já cadastrado.'});

const Usuario = mongoose.model('Usuario');
