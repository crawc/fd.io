const Food = require('../models/food');

var foodTruckController = {
  index: function(req, res, next){
    Food.find({}, function(err, foods){
      if (err) return res.redirect('/favorites');
      res.render('index', {foods});
    });
  },

  new: function(req, res, next){
    res.render('new')
  },

  create: function(req, res, next){
    let food = new Food(req.body);
    food.save(function(err){
      if (err) return res.redirect('/favorites/new');
      res.redirect('/favorites');
    });
  },

  show: function(req, res, next){
    res.render('show');
  },
  delete: function(req, res, next){

  },
  map: function(req, res, next){
    res.send('Homepage');
  },
  edit: function(req, res, next){
    res.render('edit')
  },
  update: function(req, res, next){

  }
};

module.exports = foodTruckController;
