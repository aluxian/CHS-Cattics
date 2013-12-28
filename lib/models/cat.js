'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Schema
var CatSchema = new Schema({
  ownerId: Schema.Types.ObjectId,
  info: {
    name: String,
    description: String,
    breed: String,
    born: Date,
    favorites: {
      food: String,
      color: String
    }
  },
  meta: {
    hearts: Number,
    createdAt: { type: Date, default: Date.now }
  }
});

mongoose.model('Cat', CatSchema);
