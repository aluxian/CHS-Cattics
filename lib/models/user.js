'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Schema
var UserSchema = new Schema({
  cats: [Schema.Types.ObjectId],
  info: {
    name: String,
    description: String
  },
  meta: {
    createdAt: { type: Date, default: Date.now }
  }
});

mongoose.model('User', UserSchema);
