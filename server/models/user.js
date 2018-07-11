// ===== user.JS ======
// ===== date:       ======
// define Schema
const mongoose   = require('mongoose');
const Schema     = mongoose.Schema; 
uniqueValidator  = require('mongoose-unique-validator');

 // define user Schema
 var UserSchema = new mongoose.Schema({
    username: {
        type: String, 
        lowercase: true, 
        unique: true, 
        required: [true, "can't be blank"], 
        match: [/^[a-zA-Z0-9]+$/, 'is invalid'], 
        index: true},
    email: {
        type: String, 
        lowercase: true, 
        unique: true, 
        required: [true, "can't be blank"], 
        match: [/\S+@\S+\.\S+/, 'is invalid'], 
        index: true},
    bio: String,
    image: String,
    hash: String,
    salt: String
    }, { timestamps: true }, 
    { usePushEach: true }
);

// method validate password
UserSchema.methods.setPassword = (password) => {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};

UserSchema.methods.generateJWT = () => {
    var today = new Date();
    var exp = new Date(today);
    exp.setDate(today.getDate() + 60);

    return jwt.sign({
    id: this._id,
    username: this.username,
    exp: parseInt(exp.getTime() / 1000),
    }, secret);
};
    
UserSchema.methods.toAuthJSON = () => {
    return {
        username: this.username,
        email: this.email,
        token: this.generateJWT(),
        bio: this.bio,
        image: this.image
    };
};

// set model by passing his Schema
mongoose.model('User', UserSchema);

UserSchema.plugin(uniqueValidator, {message: 'is already taken.'});

// stored model in variable
const User = mongoose.model('User');