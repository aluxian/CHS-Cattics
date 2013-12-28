'use strict';

var mongoose = require('mongoose'),
    Thing = mongoose.model('Thing'),
    Cat = mongoose.model('Cat'),
    User = mongoose.model('User');

// Add dummy things
Thing.find({}).remove(function() {
	Thing.create({
		name : 'HTML5 Boilerplate',
		info : 'HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.',
		awesomeness: 10
	}, {
		name : 'AngularJS',
		info : 'AngularJS is a toolset for building the framework most suited to your application development.',
		awesomeness: 10
	}, {
		name : 'Karma',
		info : 'Spectacular Test Runner for JavaScript.',
		awesomeness: 10
	}, {
		name : 'Express',
		info : 'Flexible and minimalist web application framework for node.js.',
		awesomeness: 10
	}, {
		name : 'MongoDB + Mongoose',
		info : 'An excellent document database. Combined with Mongoose to simplify adding validation and business logic.',
		awesomeness: 10
	}, function(err) {
			console.log('Finished inserting dummy things');
		}
	);
});

// Add dummy cats
Cat.find({}).remove(function() {
	Cat.create({
		info: {
			name: 'Thomas',
			breed: 'Persian',
			born: new Date(2010, 2, 8),
			photos: [
				'http://www.jewsnews.co.il/wp-content/uploads/2013/09/Blue-persian-cat-1-.jpg',
				'http://www.petwave.com/~/media/Images/Center/Breed/Cats/Semi%20Long%20and%20Long%20Hair/Persian/Persian%20Cat%20Sitting.ashx'
			]
		},
		meta: {
			hearts: 3
		}
	}, {
		info: {
			name: 'Tina',
			breed: 'Bengal',
			born: new Date(2011, 7, 26),
			photos: [
				'http://stylefavor.com/wp-content/uploads/2013/01/bengal_face_posing_wallpaper.jpg',
				'http://static4.wikia.nocookie.net/__cb20100128085430/dogs-cats/images/5/51/The_Bengal.jpg'
			]
		},
		meta: {
			hearts: 2753
		}
	}, function(err) {
			console.log('Finished inserting dummy cats');

			var cats = [];
			var catIds = [];

			for (var i = 1; i < arguments.length; i++) {
				cats.push(arguments[i]);
				catIds.push(arguments[i]._id);
			}

			// Add dummy users
			User.find({}).remove(function() {
				User.create({
					cats: catIds,
					login: {
						username: 'donna',
						password: 'donna'
					},
					info: {
						name: 'Donna Willkins'
					}
				}, function(err, user) {
					console.log('Finished inserting dummy users');

					// Assign the user to each cat as owner
					cats.forEach(function(cat) {
						cat.ownerId = user._id;
						cat.save();
					});
				});
			});
		}
	);
});
