const mongoose = require('mongoose');
const Usuario  = mongoose.model('User');
const passport = require('passport');


// module.exports.register = function(req, res) {
//     var usuario = new Usuario();
  
//     usuario.email = req.body.email;
//     usuario.nome = req.body.nome;
//     usuario.sobrenome = req.body.sobrenome;

//     usuario.setPassword(req.body.senha);
  
//     usuario.save(function(err) {
//       const token = any;
//       token = usuario.generateJwt();
//       res.status(200);
//       res.json({
//         "token" : token
//       });
//     });
//   };


// module.exports.login = function(req, res) {

// passport.authenticate('local', function(err, user, info){
//     var token;

//     // If Passport throws/catches an error
//     if (err) {
//     res.status(404).json(err);
//     return;
//     }

//     // If a user is found
//     if(user){
//     token = user.generateJwt();
//     res.status(200);
//     res.json({
//         "token" : token
//     });
//     } else {
//     // If user is not found
//     res.status(401).json(info);
//     }
// })(req, res);

// };