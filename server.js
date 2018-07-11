//*===== SERVER.JS ======*//
//*===dat : 05152018 ====*//
// This is the entry point of our server, it creates
// the all important express app, connects static paths,
// and requires our first modules.

const express = require('express');
const app     = express();
const port    = 1337;

const path = require('path');

// Static Directory
// process.chdir("../");
app.use(express.static(path.join(__dirname, '/public/dist')));
// console.log(path.join(__dirname, '/public/dist'));
app.use(express.static(path.join(__dirname, '/static')));
// app.use(express.static(process.cwd() + '/public/dist'));

// set parser
const parser = require('body-parser');
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(parser.text({type: 'text/xml' }));
app.use(parser.text({type: 'text/plain' }));
// - - - - = = = = Model = = = = - - - - 
// define Schema variable
require('./server/config/mongoose.js');

// - - - - = = = = Routes = = = = - - - - 

// route for getting / creatting 
require('./server/config/routes.js')(app);

// listen to port 
app.listen(port, function() {
  console.log("listening on port ", port);
});
