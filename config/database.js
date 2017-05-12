
/* This file serves to connect my application to a
MongoDB database named fdio */


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fdio');

// Gets rid of deprecated Promise message
mongoose.Promise = Promise;

var db = mongoose.connection;

db.once('open', function() {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});

db.on('error', function(err){
  console.error(`Database error:\n${err}`);
});
