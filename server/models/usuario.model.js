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
        unique: true, 
        required: [true, "Nome do usuário precisa ser preenchido"] 
    },
    email: {
        type: String,
        trim: true,
        unique: [true, 'E-mail em uso'],
        uniqueCaseInsensitive: true,
        required: [true,'Email é requerido'],
        validate: {
          validator: function( value ) {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test( value );
          },
          message: "Por favor, utilize um endereço de e-mail válido",
        },
    senha: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 256,
        validate: {
            validator: function( value ) {
            return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test( value );
            },
            message: "Senha inválida, informe ao menos um número, uma letra maiúscula e um caracter especial"
        }
        },
      },
    }, { timestamps: true });

// method validate password
// UserSchema.methods.setPassword = (password) => {
//     this.salt = crypto.randomBytes(16).toString('hex');
//     this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
// };

// UserSchema.methods.generateJWT = () => {
//     var today = new Date();
//     var exp = new Date(today);
//     exp.setDate(today.getDate() + 60);

//     return jwt.sign({
//     id: this._id,
//     username: this.username,
//     exp: parseInt(exp.getTime() / 1000),
//     }, secret);
// };
    
// UserSchema.methods.toAuthJSON = () => {
//     return {
//         username: this.username,
//         email: this.email,
//         token: this.generateJWT(),
//         bio: this.bio,
//         image: this.image
//     };
// };

// set model by passing his Schema
const Usuario = module.exports = mongoose.model('Usuario', UsuarioSchema);

UsuarioSchema.plugin(uniqueValidator, {message: 'Usuario já cadastrado.'});