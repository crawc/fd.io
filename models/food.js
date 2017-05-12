var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var foodSchema = new Schema({
  name: String,
  address: String
});

module.exports = mongoose.model('Food', foodSchema);
