function getAuthPin(){
	var fullText = $('div.message-content').text();
	if( fullText.match(/twittmark/i) && !fullText.match(/denied/i) ){
		var pin = $.trim($('#oauth_pin').text());
		$('div.message-content').html('<h2>Please wait, authorizing TwittMark...</h2>Your PIN number is: ' +  pin);
		
		chrome.extension.sendRequest({cr_oauth_pin: pin}, function(response){
			$('div.message-content').css('opacity', 1).stop();
			if( response ){
				$('div.message-content').html('<h2>Congratulations, you\'ve been successfully authenticated. Enjoy TwittMark!</h2><div id="oauth_pin" style="font-size: 2.5em;">TwittMark authorized!</div>');
			}else{
				$('div.message-content').html('<h2>Oops... Something went wrong. Please, try clicking TwittMark icon again.</h2>');
			}
		});
	}
}
getAuthPin();
