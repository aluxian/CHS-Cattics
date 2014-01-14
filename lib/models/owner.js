'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.Types.ObjectId;

// Schema
var OwnerSchema = new Schema({
  cats: [ObjectId],

  info: {
    name: String,
    description: String,
    gender: String,
    born: Date,
    avatar: String
  },

  meta: {
    createdAt: { type: Date, default: Date.now }
  }
});

mongoose.model('Owner', OwnerSchema);
