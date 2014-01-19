'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.Types.ObjectId;

// Schema
var CatSchema = new Schema({
  owner: { type: ObjectId, ref: 'Owner' },
  photos: [{ type: ObjectId, ref: 'Photo' }],

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

  meta: {
    createdAt: { type: Date, default: Date.now }
  }
});

// Virtual for total hearts number
CatSchema.virtual('meta.hearts').get(function () {
  return this.photos.reduce(function(totalHearts, photo) {
    return totalHearts + photo.hearts;
  }, 0);
});

mongoose.model('Cat', CatSchema);
