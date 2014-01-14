'use strict';

var mongoose = require('mongoose'),
		ObjectId = mongoose.Types.ObjectId,
    Cat = mongoose.model('Cat'),
    Owner = mongoose.model('Owner');

// Generate dummy object ids
var id = { cat: 2, owner: 2 };
['cat', 'owner'].forEach(function(v) {
	var c = id[v]; id[v] = [];
	while (c--) { id[v].push(ObjectId()); }
});

// Add dummy cats
Cat.find({}).remove(function() {
	Cat.create(

	// Cat: Katy
	{
		_id: id.cat[0],
		ownerId: id.owner[0],

		info: {
			name: 'Katy',
			description: 'Our youngest family member, we love her so much!',
			breed: 'Persian Gray',
			gender: 'f',
			born: new Date(2012, 2, 8)
		},

		favorites: {
			food: 'Whiskers Cans',
			color: 'orange'
		},

		photos: [
			{
				url: 'http://lorempixel.com/1920/1200/animals/',
				paws: 109,
				description: 'This is her first photo. Smile, Katy!'
			},
			{
				url: 'http://placehold.it/1000x600',
				paws: 55,
				description: 'Katy first bath. That was a disaster, but we survived!'
			}
		]
	},

	// Cat: Katy
	{
		ownerId: id.owner[0],

		info: {
			name: 'Katy',
			description: 'Our youngest family member, we love her so much!',
			breed: 'Persian Gray',
			gender: 'f',
			born: new Date(2012, 2, 8)
		},

		favorites: {
			food: 'Whiskers Cans',
			color: 'orange'
		},

		photos: [
			{
				url: 'http://lorempixel.com/1920/1200/animals/',
				paws: 109,
				description: 'This is her first photo. Smile, Katy!'
			},
			{
				url: 'http://placehold.it/1000x600',
				paws: 55,
				description: 'Katy first bath. That was a disaster, but we survived!'
			}
		]
	},

	// Cat: Katy
	{
		ownerId: id.owner[0],

		info: {
			name: 'Katy',
			description: 'Our youngest family member, we love her so much!',
			breed: 'Persian Gray',
			gender: 'f',
			born: new Date(2012, 2, 8)
		},

		favorites: {
			food: 'Whiskers Cans',
			color: 'orange'
		},

		photos: [
			{
				url: 'http://lorempixel.com/1920/1200/animals/',
				paws: 109,
				description: 'This is her first photo. Smile, Katy!'
			},
			{
				url: 'http://placehold.it/1000x600',
				paws: 55,
				description: 'Katy first bath. That was a disaster, but we survived!'
			}
		]
	},

	// Cat: Katy
	{
		ownerId: id.owner[0],

		info: {
			name: 'Katy',
			description: 'Our youngest family member, we love her so much!',
			breed: 'Persian Gray',
			gender: 'f',
			born: new Date(2012, 2, 8)
		},

		favorites: {
			food: 'Whiskers Cans',
			color: 'orange'
		},

		photos: [
			{
				url: 'http://lorempixel.com/1920/1200/animals/',
				paws: 109,
				description: 'This is her first photo. Smile, Katy!'
			},
			{
				url: 'http://placehold.it/1000x600',
				paws: 55,
				description: 'Katy first bath. That was a disaster, but we survived!'
			}
		]
	},

	// Cat: Katy
	{
		ownerId: id.owner[0],

		info: {
			name: 'Katy',
			description: 'Our youngest family member, we love her so much!',
			breed: 'Persian Gray',
			gender: 'f',
			born: new Date(2012, 2, 8)
		},

		favorites: {
			food: 'Whiskers Cans',
			color: 'orange'
		},

		photos: [
			{
				url: 'http://lorempixel.com/1920/1200/animals/',
				paws: 109,
				description: 'This is her first photo. Smile, Katy!'
			},
			{
				url: 'http://placehold.it/1000x600',
				paws: 55,
				description: 'Katy first bath. That was a disaster, but we survived!'
			}
		]
	},

	// Cat: Katy
	{
		ownerId: id.owner[0],

		info: {
			name: 'Katy',
			description: 'Our youngest family member, we love her so much!',
			breed: 'Persian Gray',
			gender: 'f',
			born: new Date(2012, 2, 8)
		},

		favorites: {
			food: 'Whiskers Cans',
			color: 'orange'
		},

		photos: [
			{
				url: 'http://lorempixel.com/1920/1200/animals/',
				paws: 109,
				description: 'This is her first photo. Smile, Katy!'
			},
			{
				url: 'http://placehold.it/1000x600',
				paws: 55,
				description: 'Katy first bath. That was a disaster, but we survived!'
			}
		]
	},

	// Cat: Katy
	{
		ownerId: id.owner[0],

		info: {
			name: 'Katy',
			description: 'Our youngest family member, we love her so much!',
			breed: 'Persian Gray',
			gender: 'f',
			born: new Date(2012, 2, 8)
		},

		favorites: {
			food: 'Whiskers Cans',
			color: 'orange'
		},

		photos: [
			{
				url: 'http://lorempixel.com/1920/1200/animals/',
				paws: 109,
				description: 'This is her first photo. Smile, Katy!'
			},
			{
				url: 'http://placehold.it/1000x600',
				paws: 55,
				description: 'Katy first bath. That was a disaster, but we survived!'
			}
		]
	},

	// Cat: Katy
	{
		ownerId: id.owner[0],

		info: {
			name: 'Katy',
			description: 'Our youngest family member, we love her so much!',
			breed: 'Persian Gray',
			gender: 'f',
			born: new Date(2012, 2, 8)
		},

		favorites: {
			food: 'Whiskers Cans',
			color: 'orange'
		},

		photos: [
			{
				url: 'http://lorempixel.com/1920/1200/animals/',
				paws: 109,
				description: 'This is her first photo. Smile, Katy!'
			},
			{
				url: 'http://placehold.it/1000x600',
				paws: 55,
				description: 'Katy first bath. That was a disaster, but we survived!'
			}
		]
	},

	// Cat: Katy
	{
		ownerId: id.owner[0],

		info: {
			name: 'Katy',
			description: 'Our youngest family member, we love her so much!',
			breed: 'Persian Gray',
			gender: 'f',
			born: new Date(2012, 2, 8)
		},

		favorites: {
			food: 'Whiskers Cans',
			color: 'orange'
		},

		photos: [
			{
				url: 'http://lorempixel.com/1920/1200/animals/',
				paws: 109,
				description: 'This is her first photo. Smile, Katy!'
			},
			{
				url: 'http://placehold.it/1000x600',
				paws: 55,
				description: 'Katy first bath. That was a disaster, but we survived!'
			}
		]
	},

	// Cat: Katy
	{
		ownerId: id.owner[0],

		info: {
			name: 'Katy',
			description: 'Our youngest family member, we love her so much!',
			breed: 'Persian Gray',
			gender: 'f',
			born: new Date(2012, 2, 8)
		},

		favorites: {
			food: 'Whiskers Cans',
			color: 'orange'
		},

		photos: [
			{
				url: 'http://lorempixel.com/1920/1200/animals/',
				paws: 109,
				description: 'This is her first photo. Smile, Katy!'
			},
			{
				url: 'http://placehold.it/1000x600',
				paws: 55,
				description: 'Katy first bath. That was a disaster, but we survived!'
			}
		]
	},

	// Cat: Katy
	{
		ownerId: id.owner[0],

		info: {
			name: 'Katy',
			description: 'Our youngest family member, we love her so much!',
			breed: 'Persian Gray',
			gender: 'f',
			born: new Date(2012, 2, 8)
		},

		favorites: {
			food: 'Whiskers Cans',
			color: 'orange'
		},

		photos: [
			{
				url: 'http://lorempixel.com/1920/1200/animals/',
				paws: 109,
				description: 'This is her first photo. Smile, Katy!'
			},
			{
				url: 'http://placehold.it/1000x600',
				paws: 55,
				description: 'Katy first bath. That was a disaster, but we survived!'
			}
		]
	},

	// Cat: Katy
	{
		ownerId: id.owner[0],

		info: {
			name: 'Katy',
			description: 'Our youngest family member, we love her so much!',
			breed: 'Persian Gray',
			gender: 'f',
			born: new Date(2012, 2, 8)
		},

		favorites: {
			food: 'Whiskers Cans',
			color: 'orange'
		},

		photos: [
			{
				url: 'http://lorempixel.com/1920/1200/animals/',
				paws: 109,
				description: 'This is her first photo. Smile, Katy!'
			},
			{
				url: 'http://placehold.it/1000x600',
				paws: 55,
				description: 'Katy first bath. That was a disaster, but we survived!'
			}
		]
	},

	// Cat: Katy
	{
		ownerId: id.owner[0],

		info: {
			name: 'Katy',
			description: 'Our youngest family member, we love her so much!',
			breed: 'Persian Gray',
			gender: 'f',
			born: new Date(2012, 2, 8)
		},

		favorites: {
			food: 'Whiskers Cans',
			color: 'orange'
		},

		photos: [
			{
				url: 'http://lorempixel.com/1920/1200/animals/',
				paws: 109,
				description: 'This is her first photo. Smile, Katy!'
			},
			{
				url: 'http://placehold.it/1000x600',
				paws: 55,
				description: 'Katy first bath. That was a disaster, but we survived!'
			}
		]
	},

	// Cat: Katy
	{
		ownerId: id.owner[0],

		info: {
			name: 'Katy',
			description: 'Our youngest family member, we love her so much!',
			breed: 'Persian Gray',
			gender: 'f',
			born: new Date(2012, 2, 8)
		},

		favorites: {
			food: 'Whiskers Cans',
			color: 'orange'
		},

		photos: [
			{
				url: 'http://lorempixel.com/1920/1200/animals/',
				paws: 109,
				description: 'This is her first photo. Smile, Katy!'
			},
			{
				url: 'http://placehold.it/1000x600',
				paws: 55,
				description: 'Katy first bath. That was a disaster, but we survived!'
			}
		]
	},

	// Cat: Katy
	{
		ownerId: id.owner[0],

		info: {
			name: 'Katy',
			description: 'Our youngest family member, we love her so much!',
			breed: 'Persian Gray',
			gender: 'f',
			born: new Date(2012, 2, 8)
		},

		favorites: {
			food: 'Whiskers Cans',
			color: 'orange'
		},

		photos: [
			{
				url: 'http://lorempixel.com/1920/1200/animals/',
				paws: 109,
				description: 'This is her first photo. Smile, Katy!'
			},
			{
				url: 'http://placehold.it/1000x600',
				paws: 55,
				description: 'Katy first bath. That was a disaster, but we survived!'
			}
		]
	},

	// Cat: Katy
	{
		ownerId: id.owner[0],

		info: {
			name: 'Katy',
			description: 'Our youngest family member, we love her so much!',
			breed: 'Persian Gray',
			gender: 'f',
			born: new Date(2012, 2, 8)
		},

		favorites: {
			food: 'Whiskers Cans',
			color: 'orange'
		},

		photos: [
			{
				url: 'http://lorempixel.com/1920/1200/animals/',
				paws: 109,
				description: 'This is her first photo. Smile, Katy!'
			},
			{
				url: 'http://placehold.it/1000x600',
				paws: 55,
				description: 'Katy first bath. That was a disaster, but we survived!'
			}
		]
	},

	// Cat: Katy
	{
		ownerId: id.owner[0],

		info: {
			name: 'Katy',
			description: 'Our youngest family member, we love her so much!',
			breed: 'Persian Gray',
			gender: 'f',
			born: new Date(2012, 2, 8)
		},

		favorites: {
			food: 'Whiskers Cans',
			color: 'orange'
		},

		photos: [
			{
				url: 'http://lorempixel.com/1920/1200/animals/',
				paws: 109,
				description: 'This is her first photo. Smile, Katy!'
			},
			{
				url: 'http://placehold.it/1000x600',
				paws: 55,
				description: 'Katy first bath. That was a disaster, but we survived!'
			}
		]
	},

	// Cat: Katy
	{
		ownerId: id.owner[0],

		info: {
			name: 'Katy',
			description: 'Our youngest family member, we love her so much!',
			breed: 'Persian Gray',
			gender: 'f',
			born: new Date(2012, 2, 8)
		},

		favorites: {
			food: 'Whiskers Cans',
			color: 'orange'
		},

		photos: [
			{
				url: 'http://lorempixel.com/1920/1200/animals/',
				paws: 109,
				description: 'This is her first photo. Smile, Katy!'
			},
			{
				url: 'http://placehold.it/1000x600',
				paws: 55,
				description: 'Katy first bath. That was a disaster, but we survived!'
			}
		]
	},

	// Cat: Katy
	{
		ownerId: id.owner[0],

		info: {
			name: 'Katy',
			description: 'Our youngest family member, we love her so much!',
			breed: 'Persian Gray',
			gender: 'f',
			born: new Date(2012, 2, 8)
		},

		favorites: {
			food: 'Whiskers Cans',
			color: 'orange'
		},

		photos: [
			{
				url: 'http://lorempixel.com/1920/1200/animals/',
				paws: 109,
				description: 'This is her first photo. Smile, Katy!'
			},
			{
				url: 'http://placehold.it/1000x600',
				paws: 55,
				description: 'Katy first bath. That was a disaster, but we survived!'
			}
		]
	},

	// Cat: Katy
	{
		ownerId: id.owner[0],

		info: {
			name: 'Katy',
			description: 'Our youngest family member, we love her so much!',
			breed: 'Persian Gray',
			gender: 'f',
			born: new Date(2012, 2, 8)
		},

		favorites: {
			food: 'Whiskers Cans',
			color: 'orange'
		},

		photos: [
			{
				url: 'http://lorempixel.com/1920/1200/animals/',
				paws: 109,
				description: 'This is her first photo. Smile, Katy!'
			},
			{
				url: 'http://placehold.it/1000x600',
				paws: 55,
				description: 'Katy first bath. That was a disaster, but we survived!'
			}
		]
	},

	// Cat: Katy
	{
		ownerId: id.owner[0],

		info: {
			name: 'Katy',
			description: 'Our youngest family member, we love her so much!',
			breed: 'Persian Gray',
			gender: 'f',
			born: new Date(2012, 2, 8)
		},

		favorites: {
			food: 'Whiskers Cans',
			color: 'orange'
		},

		photos: [
			{
				url: 'http://lorempixel.com/1920/1200/animals/',
				paws: 109,
				description: 'This is her first photo. Smile, Katy!'
			},
			{
				url: 'http://placehold.it/1000x600',
				paws: 55,
				description: 'Katy first bath. That was a disaster, but we survived!'
			}
		]
	},

	// Cat: Katy
	{
		ownerId: id.owner[0],

		info: {
			name: 'Katy',
			description: 'Our youngest family member, we love her so much!',
			breed: 'Persian Gray',
			gender: 'f',
			born: new Date(2012, 2, 8)
		},

		favorites: {
			food: 'Whiskers Cans',
			color: 'orange'
		},

		photos: [
			{
				url: 'http://lorempixel.com/1920/1200/animals/',
				paws: 109,
				description: 'This is her first photo. Smile, Katy!'
			},
			{
				url: 'http://placehold.it/1000x600',
				paws: 55,
				description: 'Katy first bath. That was a disaster, but we survived!'
			}
		]
	},

	// Cat: Katy
	{
		ownerId: id.owner[0],

		info: {
			name: 'Katy',
			description: 'Our youngest family member, we love her so much!',
			breed: 'Persian Gray',
			gender: 'f',
			born: new Date(2012, 2, 8)
		},

		favorites: {
			food: 'Whiskers Cans',
			color: 'orange'
		},

		photos: [
			{
				url: 'http://lorempixel.com/1920/1200/animals/',
				paws: 109,
				description: 'This is her first photo. Smile, Katy!'
			},
			{
				url: 'http://placehold.it/1000x600',
				paws: 55,
				description: 'Katy first bath. That was a disaster, but we survived!'
			}
		]
	},

	// Cat: Katy
	{
		ownerId: id.owner[0],

		info: {
			name: 'Katy',
			description: 'Our youngest family member, we love her so much!',
			breed: 'Persian Gray',
			gender: 'f',
			born: new Date(2012, 2, 8)
		},

		favorites: {
			food: 'Whiskers Cans',
			color: 'orange'
		},

		photos: [
			{
				url: 'http://lorempixel.com/1920/1200/animals/',
				paws: 109,
				description: 'This is her first photo. Smile, Katy!'
			},
			{
				url: 'http://placehold.it/1000x600',
				paws: 55,
				description: 'Katy first bath. That was a disaster, but we survived!'
			}
		]
	},

	// Cat: Katy
	{
		ownerId: id.owner[0],

		info: {
			name: 'Katy',
			description: 'Our youngest family member, we love her so much!',
			breed: 'Persian Gray',
			gender: 'f',
			born: new Date(2012, 2, 8)
		},

		favorites: {
			food: 'Whiskers Cans',
			color: 'orange'
		},

		photos: [
			{
				url: 'http://lorempixel.com/1920/1200/animals/',
				paws: 109,
				description: 'This is her first photo. Smile, Katy!'
			},
			{
				url: 'http://placehold.it/1000x600',
				paws: 55,
				description: 'Katy first bath. That was a disaster, but we survived!'
			}
		]
	},

	// Cat: Katy
	{
		ownerId: id.owner[0],

		info: {
			name: 'Katy',
			description: 'Our youngest family member, we love her so much!',
			breed: 'Persian Gray',
			gender: 'f',
			born: new Date(2012, 2, 8)
		},

		favorites: {
			food: 'Whiskers Cans',
			color: 'orange'
		},

		photos: [
			{
				url: 'http://lorempixel.com/1920/1200/animals/',
				paws: 109,
				description: 'This is her first photo. Smile, Katy!'
			},
			{
				url: 'http://placehold.it/1000x600',
				paws: 55,
				description: 'Katy first bath. That was a disaster, but we survived!'
			}
		]
	},

	// Cat: Katy
	{
		ownerId: id.owner[0],

		info: {
			name: 'Katy',
			description: 'Our youngest family member, we love her so much!',
			breed: 'Persian Gray',
			gender: 'f',
			born: new Date(2012, 2, 8)
		},

		favorites: {
			food: 'Whiskers Cans',
			color: 'orange'
		},

		photos: [
			{
				url: 'http://lorempixel.com/1920/1200/animals/',
				paws: 109,
				description: 'This is her first photo. Smile, Katy!'
			},
			{
				url: 'http://placehold.it/1000x600',
				paws: 55,
				description: 'Katy first bath. That was a disaster, but we survived!'
			}
		]
	},

	// Cat: Katy
	{
		ownerId: id.owner[0],

		info: {
			name: 'Katy',
			description: 'Our youngest family member, we love her so much!',
			breed: 'Persian Gray',
			gender: 'f',
			born: new Date(2012, 2, 8)
		},

		favorites: {
			food: 'Whiskers Cans',
			color: 'orange'
		},

		photos: [
			{
				url: 'http://lorempixel.com/1920/1200/animals/',
				paws: 109,
				description: 'This is her first photo. Smile, Katy!'
			},
			{
				url: 'http://placehold.it/1000x600',
				paws: 55,
				description: 'Katy first bath. That was a disaster, but we survived!'
			}
		]
	},

	// Cat: Katy
	{
		ownerId: id.owner[0],

		info: {
			name: 'Katy',
			description: 'Our youngest family member, we love her so much!',
			breed: 'Persian Gray',
			gender: 'f',
			born: new Date(2012, 2, 8)
		},

		favorites: {
			food: 'Whiskers Cans',
			color: 'orange'
		},

		photos: [
			{
				url: 'http://lorempixel.com/1920/1200/animals/',
				paws: 109,
				description: 'This is her first photo. Smile, Katy!'
			},
			{
				url: 'http://placehold.it/1000x600',
				paws: 55,
				description: 'Katy first bath. That was a disaster, but we survived!'
			}
		]
	},

	// Cat: Katy
	{
		ownerId: id.owner[0],

		info: {
			name: 'Katy',
			description: 'Our youngest family member, we love her so much!',
			breed: 'Persian Gray',
			gender: 'f',
			born: new Date(2012, 2, 8)
		},

		favorites: {
			food: 'Whiskers Cans',
			color: 'orange'
		},

		photos: [
			{
				url: 'http://lorempixel.com/1920/1200/animals/',
				paws: 109,
				description: 'This is her first photo. Smile, Katy!'
			},
			{
				url: 'http://placehold.it/1000x600',
				paws: 55,
				description: 'Katy first bath. That was a disaster, but we survived!'
			}
		]
	},

	// Cat: Katy
	{
		ownerId: id.owner[0],

		info: {
			name: 'Katy',
			description: 'Our youngest family member, we love her so much!',
			breed: 'Persian Gray',
			gender: 'f',
			born: new Date(2012, 2, 8)
		},

		favorites: {
			food: 'Whiskers Cans',
			color: 'orange'
		},

		photos: [
			{
				url: 'http://placehold.it/1920x1600',
				paws: 109,
				description: 'This is her first photo. Smile, Katy!'
			},
			{
				url: 'http://placehold.it/1000x600',
				paws: 55,
				description: 'Katy first bath. That was a disaster, but we survived!'
			}
		]
	},

	// Cat: Katy
	{
		ownerId: id.owner[0],

		info: {
			name: 'Katy',
			description: 'Our youngest family member, we love her so much!',
			breed: 'Persian Gray',
			gender: 'f',
			born: new Date(2012, 2, 8)
		},

		favorites: {
			food: 'Whiskers Cans',
			color: 'orange'
		},

		photos: [
			{
				url: 'http://placehold.it/1920x1600',
				paws: 109,
				description: 'This is her first photo. Smile, Katy!'
			},
			{
				url: 'http://placehold.it/1000x600',
				paws: 55,
				description: 'Katy first bath. That was a disaster, but we survived!'
			}
		]
	},

	// Cat: Katy
	{
		ownerId: id.owner[0],

		info: {
			name: 'Katy',
			description: 'Our youngest family member, we love her so much!',
			breed: 'Persian Gray',
			gender: 'f',
			born: new Date(2012, 2, 8)
		},

		favorites: {
			food: 'Whiskers Cans',
			color: 'orange'
		},

		photos: [
			{
				url: 'http://placehold.it/1920x1600',
				paws: 109,
				description: 'This is her first photo. Smile, Katy!'
			},
			{
				url: 'http://placehold.it/1000x600',
				paws: 55,
				description: 'Katy first bath. That was a disaster, but we survived!'
			}
		]
	},

	// Cat: Katy
	{
		ownerId: id.owner[0],

		info: {
			name: 'Katy',
			description: 'Our youngest family member, we love her so much!',
			breed: 'Persian Gray',
			gender: 'f',
			born: new Date(2012, 2, 8)
		},

		favorites: {
			food: 'Whiskers Cans',
			color: 'orange'
		},

		photos: [
			{
				url: 'http://placehold.it/1920x1600',
				paws: 109,
				description: 'This is her first photo. Smile, Katy!'
			},
			{
				url: 'http://placehold.it/1000x600',
				paws: 55,
				description: 'Katy first bath. That was a disaster, but we survived!'
			}
		]
	},

	// Cat: Katy
	{
		ownerId: id.owner[0],

		info: {
			name: 'Katy',
			description: 'Our youngest family member, we love her so much!',
			breed: 'Persian Gray',
			gender: 'f',
			born: new Date(2012, 2, 8)
		},

		favorites: {
			food: 'Whiskers Cans',
			color: 'orange'
		},

		photos: [
			{
				url: 'http://placehold.it/1920x1600',
				paws: 109,
				description: 'This is her first photo. Smile, Katy!'
			},
			{
				url: 'http://placehold.it/1000x600',
				paws: 55,
				description: 'Katy first bath. That was a disaster, but we survived!'
			}
		]
	},

	// Cat: Katy
	{
		ownerId: id.owner[0],

		info: {
			name: 'Katy',
			description: 'Our youngest family member, we love her so much!',
			breed: 'Persian Gray',
			gender: 'f',
			born: new Date(2012, 2, 8)
		},

		favorites: {
			food: 'Whiskers Cans',
			color: 'orange'
		},

		photos: [
			{
				url: 'http://placehold.it/1920x1600',
				paws: 109,
				description: 'This is her first photo. Smile, Katy!'
			},
			{
				url: 'http://placehold.it/1000x600',
				paws: 55,
				description: 'Katy first bath. That was a disaster, but we survived!'
			}
		]
	},

	// Cat: Katy
	{
		ownerId: id.owner[0],

		info: {
			name: 'Katy',
			description: 'Our youngest family member, we love her so much!',
			breed: 'Persian Gray',
			gender: 'f',
			born: new Date(2012, 2, 8)
		},

		favorites: {
			food: 'Whiskers Cans',
			color: 'orange'
		},

		photos: [
			{
				url: 'http://placehold.it/1920x1600',
				paws: 109,
				description: 'This is her first photo. Smile, Katy!'
			},
			{
				url: 'http://placehold.it/1000x600',
				paws: 55,
				description: 'Katy first bath. That was a disaster, but we survived!'
			}
		]
	},

	// Cat: Katy
	{
		ownerId: id.owner[0],

		info: {
			name: 'Katy',
			description: 'Our youngest family member, we love her so much!',
			breed: 'Persian Gray',
			gender: 'f',
			born: new Date(2012, 2, 8)
		},

		favorites: {
			food: 'Whiskers Cans',
			color: 'orange'
		},

		photos: [
			{
				url: 'http://placehold.it/1920x1600',
				paws: 109,
				description: 'This is her first photo. Smile, Katy!'
			},
			{
				url: 'http://placehold.it/1000x600',
				paws: 55,
				description: 'Katy first bath. That was a disaster, but we survived!'
			}
		]
	},

	// Cat: Katy
	{
		ownerId: id.owner[0],

		info: {
			name: 'Katy',
			description: 'Our youngest family member, we love her so much!',
			breed: 'Persian Gray',
			gender: 'f',
			born: new Date(2012, 2, 8)
		},

		favorites: {
			food: 'Whiskers Cans',
			color: 'orange'
		},

		photos: [
			{
				url: 'http://placehold.it/1920x1600',
				paws: 109,
				description: 'This is her first photo. Smile, Katy!'
			},
			{
				url: 'http://placehold.it/1000x600',
				paws: 55,
				description: 'Katy first bath. That was a disaster, but we survived!'
			}
		]
	},

	// Cat: Ronald
	{
		_id: id.cat[1],
		ownerId: id.owner[1],

		info: {
			name: 'Ronald',
			description: 'Ronald is the perfect companion pet, always calm and *purrr*, so loveful. We sometimes call him Mr. Ronald, as it\'s way funnier!',
			breed: 'British Shorthair',
			gender: 'm',
			born: new Date(2011, 9, 4)
		},

		favorites: {
			food: 'Home-Baked Cookies',
			color: 'blue'
		},

		photos: [
			{
				url: 'http://placehold.it/2048x1200',
				paws: 3729,
				description: 'Ronald learning to crochet!'
			},
			{
				url: 'http://placehold.it/1200x1920',
				paws: 861,
				description: 'Mr. Ronald, taking a well-deserved sleep.'
			}
		]
	},

	function(err) {
			console.log(err, 'Finished inserting dummy cats');
		}
	);
});


// Add dummy owners
Owner.find({}).remove(function() {
	Owner.create(

	// Owner: Tanya Rottfield
	{
		_id: id.owner[0],
		cats: [id.cat[0]],

		info: {
			name: 'Tanya Rottfield',
			description: 'I\'ve always loved animals, especially cats. I\'d love to meet other owners with the same hobbies as me!',
			gender: 'f',
			born: new Date(1977, 11, 10),
			avatar: 'http://ppcdn.500px.org/57442542/f0639647c308f2a295590ca4982f4a22ba20e97d/3.jpg'
		}
	},

	// Owner: Mike Wedgers
	{
		_id: id.owner[1],
		cats: [id.cat[1]],

		info: {
			name: 'Mike Wedgers',
			description: 'I\'m passionate about photography and felines. I\'d love to become a better pet owner and also find other cat photography enthusiasts!',
			gender: 'm',
			born: new Date(1982, 4, 7),
			avatar: 'http://ppcdn.500px.org/50111280/c3819a49d98c159f3992017b03d89063d6faf966/3.jpg'
		}
	},

	function(err) {
			console.log(err, 'Finished inserting dummy owners');
		}
	);
});
