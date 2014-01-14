'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.Types.ObjectId;

// Schema
var CatSchema = new Schema({
  ownerId: ObjectId,

  info: {
    name: String,
    description: String,
    breed: String,
    gender: String,
    born: Date
  },

  favorites: {
    food: String,
    color: String
  },

  photos: [{
    url: String,
    paws: Number,
    description: String
  }],

  meta: {
    createdAt: { type: Date, default: Date.now }
  }
});

// Virtual for total paws number
CatSchema.virtual('meta.paws').get(function () {
  return this.photos.reduce(function(totalPaws, photo) {
    return totalPaws + photo.paws;
  }, 0);
});

mongoose.model('Cat', CatSchema);
