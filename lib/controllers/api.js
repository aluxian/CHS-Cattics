'use strict';

var mongoose = require('mongoose'),
    Cat = mongoose.model('Cat'),
    Owner = mongoose.model('Owner');

// GET /api/explore/cats
exports.exploreCats = function(req, res) {
  return Cat.find(function (err, cats) {
    if (err) { return res.send(err); }
    var page = req.query.page;
    var offset = (page-1) * 20;
    var photos = [];

    for (var i = 0; i < cats.length; i++) {
      var cat = cats[i];
      var paws = cat.meta.paws;

      for (var j = 0; j < cat.photos.length; j++) {
        var photo = cat.photos[j];

        if (photos.length >= page * 20) {
          i = cats.length;
          j = cat.photos.length;
        }

        photo = photo.toObject();
        photo.cat = cat.toObject();
        photo.cat.meta.paws = paws;
        photos.push(photo);
      }
    }

    return res.json(photos.slice(offset, offset+20));
  });
};

// GET /api/explore/owners
exports.exploreOwners = function(req, res) {
  return Owner.find(function (err, owners) {
    if (err) { return res.send(err); }
    return res.json(owners);
  });
};
