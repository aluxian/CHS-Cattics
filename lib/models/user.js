'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Schema
var UserSchema = new Schema({
  cats: [Schema.Types.ObjectId],

  login: {
    username: String,
    password: String
  },

  info: {
    name: String,
    description: String,
    born: Date
  },

  meta: {
    createdAt: { type: Date, default: Date.now }
  }
});

mongoose.model('User', UserSchema);
