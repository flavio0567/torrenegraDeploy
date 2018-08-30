//*===== SERVER.JS ======*//
//*===dat : 05152018 ====*//
const express    = require('express');
const path       = require('path');
const app        = express();
const port       = 5000;
const parser     = require('body-parser');
const session    = require('express-session');
const MongoStore = require('connect-mongo')(session);
// const passport   = require('passport');

app.use(express.static(path.join(__dirname, '/public/dist')));
app.use(express.static(path.join(__dirname, '/static')));

// set parser

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(parser.text({type: 'text/xml' }));
app.use(parser.text({type: 'text/plain' }));

// - - - - = = = = Session = = = = - - - - 
app.use(session({ 
  secret: 'FFGG-f3m4r-r3m4f-g3c4', 
  resave: false, 
  saveUninitialized: true,
  store: new MongoStore({ url: 'mongodb://localhost/torrenegra' }),
  cookie: { maxAge: 100 * 60 * 1000 } 
 }));
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(expressJwt({ secret: jwtSecret }).unless({ path: ['/','/register','/login']}));

// - - - - = = = = Model = = = = - - - - 
// define Schema variable
require('./server/config/mongoose.config.js');
// require('./server/config/passport');
// require('./server/config/auth');
// - - - - = = = = Routes = = = = - - - - 

// route for getting / creatting 
require('./server/config/routes.config.js')(app);


// listen to port 
app.listen(port, function() {
  console.log("listening on port ", port);
});
