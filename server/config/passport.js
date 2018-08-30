const mongoose = require('mongoose');
const Usuario  = mongoose.model('Usuario');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;


module.exports = function (passport) {
    passport.serializeUser(function( usuario, done) {
        done(null,  usuario);
      });
    
    passport.deserializeUser(function( user_id, done) {
        Usuario.findById({_id: user_id}, function (err, usuario) {
            done(err,  usuario);
        });
    });

    passport.use(new LocalStrategy({    
        usernameField: 'email',
        passwordField: 'senha',
        passReqToCallback: true
    },
    function(req,email, password, done) {
      console.log('email: ', email);
      console.log('password:', password);
      Usuario.findOne({ email: email })
        .then(user => {
            if(!user) { 
                done(null, false);
            }
            if (usuario.length === 0) { 
                console.log('Usuário não encontrado:');
                done(null, false, { message: "Usuário não encontrado para este email " });
            }
                usuario.compareSenha(password, function (err, isMatch) {
                    if (isMatch && !err) {
                        const result = {
                            success: true,
                            ativo: usuario.ativo,
                            admin: usuario.admin,
                        }
                        console.log('passei aqui:', result);
                        done(null, { user_id: result._id }, { message: 'Autenticação com Sucesso!' });
                    } else {
                        console.log('passei aqui: Falha na autenticação!');
                        done(null, false, { message: 'Falha na autenticação!' });
                    }
                });

            })
            .catch(err => {
                if(err) {
                    done(null, false);
                }
            })
        }
    ));


}