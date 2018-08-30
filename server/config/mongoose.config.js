// ===== mongoose.JS      ======
// ===== date:            ======
//
// Path
const path       = require('path');
const fs         = require('fs');
const mongoose   = require('mongoose');

// connect to mongoose
mongoose.connect('mongodb://localhost/torrenegra', {
    useMongoClient: true, 
    autoIndex: false
  });

mongoose.connection.on('connected', () => console.log('connected to MongoDB'));
mongoose.Promise = global.Promise;

// require user
require('./../models/usuario.model.js');

const models_path = path.join(__dirname, './../models');

fs.readdirSync(models_path).forEach(function(file) {
    if(file.indexOf('.js') >= 0) {
        // require the file (this runs the model file which registers the schema)
        require(models_path + '/' + file);
    };
});