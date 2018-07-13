// ===== Conttroler Projeto.JS ======
// ===== date:  20180323       ======
//
const mongoose    = require('mongoose');
const Projeto     = mongoose.model('Projeto');
const Apontamento = mongoose.model('Apontamento');

module.exports = { 
    list: (req, res) => {
        console.log("SERVER > CONTROLLER > list")
        Projeto.find({}).sort({ 'codigo': -1 })
            .then(projeto => res.json(projeto))
            .catch(error => console.log(error));
    },
    novo: (req, res) => {
        console.log("SERVER > CONTROLLER > novo > req.body", req.body);
        let projeto = new Projeto(req.body.projeto);
        projeto.save(function(err, result){
            if(err) {
                console.log('Ocorreu erro salvando projeto');
                res.json(err);
            } else { 
                console.log('sucesso savando projeto');
                res.json(result);
            }
        })
    },
    // write: (req, res) => {
    //     Restaurant.findOne({_id: req.params.id }, function(err, restaurant){
    //         let review = new Review(req.body.reviews);   
    //         review._restaurant = req.params.id;
    //         restaurant.reviews = restaurant.reviews.concat(review); 
    //         review.save(function(err, review){
    //             if(err) { 
    //                 console.log('Error saving review ');
    //                 return res.json(err);
    //             }else{   
    //                 restaurant.save(function(err, restaurant){
    //                     if(err) { 
    //                         console.log('Error saving restaurant');
    //                         return res.json(err);
    //                     }else{
    //                         console.log('Review inserted!');
    //                         return res.json(restaurant);
    //                     }; 
    //                 });
    //             }
    //         });   
    //     });
    // },
    apontamentoList: (req, res) => {
        Projeto.findOne({_id: req.params.id})
        // .populate('reviews')
        .populate({path: 'Projeto', apontamentos: { sort: { 'inicio': -1 } } })
            .then(projeto => res.json(projeto))
            .catch(error => console.log(error));
    },
    encerrar: (req, res) => {
        Projeto.update( { _id: req.params.id }, { encerrado: true })
            .then(projeto => res.json(projeto))
            .catch(error => console.log(error));
    },
    
    // getRestaurantById: function(req, res) {
    //     console.log('getRestaurantById: ', req.params.id);
    //     Restaurant.findById({_id: req.params.id})
    //     .populate('reviews')
    //     // .populate({path: 'Restaurant', reviews: { sort: { 'starts': 1 } } })
    //     .then(restaurant => res.json(restaurant))
    //     .catch(error => console.log(error));
    // },

    // destroy: (req, res) => {
    //     Restaurant.findByIdAndRemove({_id: req.params.id})
    //         .then(restaurant => res.json(restaurant))
    //         .catch(error => console.log(error));
    // }

}