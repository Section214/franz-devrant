const path = require('path');

module.exports = (Franz, options) => {
	// Add back button to individual rants
	if ($('.addcomment-btn').length) {
		$('.rantlist').append('<li class="feed-prev-more"><a class="feed-back" onclick="window.history.back()" style="cursor: pointer"><span class="icon-back2 icon"></span><span class="feed-prev-more-link">Back</span></a><div class="clearfix"></div></li>');
	}
	
	// Add target attribute to app buttons so they open in browser
	$('.app-btns-container a').each( function() {
		$(this).attr('target', '_blank');
	});
	
	// Add help link to devrant menu
	$('.menu-option-log-out').before('<li><a class="menu-franz" href="https://github.com/section214/franz-devrant/issues" target="_blank"><span class="icon-github2 icon"></span>Franz Integration</a></li>');
	
	function getMessages() {
		let unread = '';

		if ($('.top-bar-notif.notif-badge').length) {
			unread = $('.top-bar-notif.notif-badge').text();
		}

		Franz.setBadge(unread);
	}

	Franz.loop(getMessages);
};
