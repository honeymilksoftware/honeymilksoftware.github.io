function randomSubhead(id) {
	var subheads = [
		"Making a special kind of software called video games",
		"Hello this is my website hello",
		"Is this a good company name? I think so",
		"Can one person be a company? The legal answer is yes",
		"Please sign up for the mailing list please!!",
		"Hello I hope you're having a good day!",
		"What's your favorite video game?"
	];
	var sentence = subheads[Math.floor(Math.random() * subheads.length)];
	for(var i = 0; i < sentence.length; i++){
    (function(index) {
      setTimeout(function() {
        document.getElementById(id).innerHTML+=sentence[index]; 
      }, 15 * i);
    })(i);
  }
}