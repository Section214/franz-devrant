const path = require('path');

module.exports = (Franz, options) => {
	Franz.injectCSS(path.join(__dirname, 'css', 'franz.css'));
	
	if ($('.addcomment-btn').length) {
		$('.rantlist').append('<li class="feed-prev-more"><a class="feed-back" onclick="window.history.back()" style="cursor: pointer"><span class="icon-back2 icon"></span><span class="feed-prev-more-link">Back</span></a><div class="clearfix"></div></li>');
	}
	
	function getMessages() {
		let unread = '';


		if ($('.top-bar-notif.notif-badge').length) {
			unread = $('.top-bar-notif.notif-badge').text();
		}

		Franz.setBadge(unread);
	}

	Franz.loop(getMessages);
}
