'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.Types.ObjectId;

// Schema
var OwnerSchema = new Schema({
  cats: [{ type: ObjectId, ref: 'Cat' }],

  info: {
    name: String,
    description: String,
    gender: String,
    born: Date,
    avatar: { type: ObjectId, ref: 'Photo' }
  },

  meta: {
    followers: [{ type: ObjectId, ref: 'Owner' }],
    createdAt: { type: Date, default: Date.now }
  }
});

mongoose.model('Owner', OwnerSchema);
