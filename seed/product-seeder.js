var express = require('express');
var Product = require('../models/product');
var mongoose =  require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping',{useNewUrlParser: true });


var products = [
	new Product({
		imagePath: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Gothiccover.png/220px-Gothiccover.png",
		title: "Gothic Video Game",
		description: "Awesome Game!!!",
		price: 10
	}),
	new Product({
		imagePath: "https://static.raru.co.za/cover/2014/07/03/1789113-l.jpg?v=1405245289",
		title: "GTA Video Game",
		description: "Now this is Awesome Game!!!",
		price: 15
	}),
	new Product({
		imagePath: "data:image/jpeg;base64,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",
		title: "Dark Souls",
		description: "This is Great Game!!!",
		price: 25
	}),
	new Product({
		imagePath: "https://s1.gaming-cdn.com/images/products/1419/271x377/1419.jpg",
		title: "Call Of Duty",
		description: "Ultimate Video Game!!!",
		price: 30
	}),
	new Product({
		imagePath: "https://media.contentapi.ea.com/content/dam/need-for-speed/images/2017/06/nfspgenkeyartrgbhorz-16x9.jpg.adapt.crop191x100.1200w.jpg",
		title: "Need For Speed Video Game",
		description: "This is Awesome Game!!!",
		price: 35
	})
];

var done = 0;
for(var i=0; i < products.length; i++){
	products[i].save(function(err,result){
		done++
		if(done === products.length){
			exit();
		};
	});
}
function exit(){
mongoose.disconnect();
}