if (Posts.find().count() === 0){
	Posts.insert({
		title: 'Example title',
		author: 'Dummy Guy',
		url: 'http://facebook.com'
	});
	Posts.insert({
		title: 'Twisted',
		author: 'Stop me',
		url: 'http://yelp.com'
	});
	Posts.insert({
		title: 'Yippie title',
		author: 'Random Guy',
		url: 'http://twitter.com'
	});
}