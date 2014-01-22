'use strict';

var mongoose = require('mongoose'),
    Cat = mongoose.model('Cat'),
    Owner = mongoose.model('Owner'),
    Photo = mongoose.model('Photo');

// GET /api/explore/cats
exports.exploreCats = function(req, res) {
  if (req.query.count) {
    return Photo.count({ ownerType: 'Cat' }, function(err, count) {
      if (err) { return res.send(err); }
      res.json(Math.ceil(count/20));
    });
  };

  return Photo
  .find({ownerType: 'Cat'})
  .sort({hearts: 'desc'})
  .skip((req.query.page - 1) * 20)
  .limit(20)
  .populate('owner.cat')
  .populate('info.name')
  .exec(function(err, photos) {
    if (err) { return res.send(err); }
    res.json(photos);
  });
};

// GET /api/explore/owners
exports.exploreOwners = function(req, res) {
  if (req.query.count) {
    return Photo.count({ ownerType: 'Owner' }, function(err, count) {
      if (err) { return res.send(err); }
      res.json(Math.ceil(count/20));
    });
  };

  return Photo
  .find({ownerType: 'Owner'})
  .sort({hearts: 'desc'})
  .skip((req.query.page - 1) * 20)
  .limit(20)
  .populate('owner.owner')
  .populate('info.name')
  .exec(function(err, photos) {
    if (err) { return res.send(err); }
    res.json(photos);
  });
};

// GET /api/cat/:id
exports.catProfile = function(req, res) {
  return Cat
  .find({_id: req.params.id})
  .populate('owner')
  .populate('photos')
  .exec(function(err, cat) {
    if (err) { return res.send(err); }
    res.json(cat);
  });
};

// GET /api/owner/:id
exports.ownerProfile = function(req, res) {
  return Owner
  .find({_id: req.params.id})
  .populate('cats')
  .populate('info.avatar')
  .exec(function(err, owner) {
    if (err) { return res.send(err); }
    res.json(owner);
  });
};
