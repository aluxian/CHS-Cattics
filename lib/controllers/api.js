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
  .populate('owner.cat', 'info.name')
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
  .populate('owner.owner', 'info.name')
  .exec(function(err, photos) {
    if (err) { return res.send(err); }
    res.json(photos);
  });
};
