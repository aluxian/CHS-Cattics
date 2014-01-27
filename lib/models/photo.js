'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.Types.ObjectId;

// Schema
var PhotoSchema = new Schema({
  ownerType: String,

  owner: {
    cat: { type: ObjectId, ref: 'Cat' },
    owner: { type: ObjectId, ref: 'Owner' }
  },

  url: String,
  hearts: Number,
  description: String
});

mongoose.model('Photo', PhotoSchema);
