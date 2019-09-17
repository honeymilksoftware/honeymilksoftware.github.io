function randomSubhead(id) {
	var subheads = [
		"Making a special kind of software called 'video games'",
		"Hello this is my website hello",
		"I'm just doing my best",
		"Trying to make a game as good as Metal Gear Solid 2",
		"Is this a good company name? Let me know in the comments",
		"Can one person be a company? The answer is yes",
		"I quit my job so I can make video games and disappoint my parents",
		"Please sign up for the mailing list so I can gather more data on you"
	];
	var sentence = subheads[Math.floor(Math.random() * subheads.length)];
	for(var i = 0; i < sentence.length; i++){
    (function(index) {
      setTimeout(function() {
        document.getElementById(id).innerHTML+=sentence[index]; 
      }, 25 * i);
    })(i);
  }
}