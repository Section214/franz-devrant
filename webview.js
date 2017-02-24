const path = require('path');

module.exports = (Franz, options) => {
	Franz.injectCSS(path.join(__dirname, 'css', 'franz.css'));
	
	// Add back button and permalink to individual rants
	if ($('.addcomment-btn').length) {
		let rant = $('.body-col2').data('id');

		// Back button
		$('.rantlist').append('<li class="feed-prev-more"><a class="feed-prev" onclick="window.history.back()" style="cursor: pointer"><span class="icon-back2 icon"></span><span class="feed-prev-more-link">Back</span></a><div class="clearfix"></div></li>');

		// Permalink button
		$('.share-icons').prepend('<a class="rant-permalink" href="https://www.devrant.io/rants/' + rant + '" target="_blank"><span class="icon-rantsemoticon2 icon"></span><span class="share-text">Permalink</span></a>');
	}
	
	if ($('.profile-bar').length) {
		let username = $('.username-profile').text();
		
		if (username === 'ghost1227') {
			$('.profile-avatar-container').after('<div class="profile-franz-integration"><a href="https://github.com/Section214/franz-devrant/issues" target="_blank">Hey there! If you\'re seeing this, you\'re using my devRant integration plugin for Franz. Congratulations! If you have questions about this plugin, or have an idea for a new integration, click here and let me know!</a></div>');
		}
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
