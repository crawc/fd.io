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
    Food.findByIdAndRemove(req.params.id, function(err) {
      if (err) return res.redirect('/favorites');
      res.redirect('/');
    });

  },
  map: function(req, res, next){
    res.render('map');
  },

  edit: function(req, res, next){
    Food.findById(req.params.id, function(err, data){
      if (err) return res.render('edit');
      res.render('edit', {food: data})
    });
  },

  update: function(req, res, next){
    Food.findByIdAndUpdate(req.params.id, function(err){
      if (err) return res.render('edit');
      res.redirect('/favorites');
    })
  }
};

module.exports = foodTruckController;
