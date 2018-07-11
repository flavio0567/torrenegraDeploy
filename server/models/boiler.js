// ===== boiler.JS ======
// ===== date:       ======
// define Schema
const mongoose   = require('mongoose');
const Schema     = mongoose.Schema; 

const RestaurantSchema = new Schema({
    name: {
        type: String,
        required: [true, "Restaurants Name is required"],
        minlength: 3,
        unique: true,
        trim: true
    },
    cuisine: {
        type: String,
        required: [true, "Cuisine is required"],
        minlength: 3,
        trim: true
    },
    reviews: [{type: Schema.Types.ObjectId, ref: 'Review'}]
    }, { timestamps: true }, 
       { autoIndex: false },
       { usePushEach: true }
);
 // define review Schema
const ReviewSchema = new mongoose.Schema({
    _restaurant: {type: Schema.Types.ObjectId, ref: 'Restaurant'},
    customer: {
        type: String,
        required: [true, "Customer is required"],
        minlength: 3, 
    },
    stars: {
        type: Number,
        min: 1,
        max: 5,
        validate: {
            validator: function( value ) {
                return /[1-5]/.test( value );
            },
            message: "Please starts must be between 1 and 5",
          }
    },
    description: {
        type: String,
        required: [true, "Review description is required"],
        minlength: 3,
    }
   }, { timestamps: true }, 
      { autoIndex: false },
      { usePushEach: true }
);

// set model by passing his Schema
mongoose.model('Restaurant', RestaurantSchema);
mongoose.model('Review', ReviewSchema);

RestaurantSchema.plugin(uniqueValidator, {message: 'is already taken.'});

// stored model in variable
const Restaurant = mongoose.model('Restaurant');
const Review = mongoose.model('Review');