///////////////////////////////////////////////////
///////////////////////////////////////////////////
//////////////////////////////////////////
//Search Bar
(function() {
	var cx = '004254473424411894975:bhhgqbjiui8';
	var gcse = document.createElement('script');
	gcse.type = 'text/javascript';
	gcse.async = true;
	gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(gcse, s);
})();
//Changes Searchbar Text
window.onload = function() {
	document.getElementById('gsc-i-id1').placeholder = 'Search with MOIKApy';
};
///////////////////////////////////////////////////
///////////////////////////////////////////////////
/////////////////////////////////////////////////// Twitch username
const twitchUserName = "MOIKApy";
/// Create Offline Header||Banner
const h1 = '<h1>MOIKApy</h1>';
///////////////////////////////////////////////////
/////////////////////////////////////////////////// API call to see if Twitch Username is Online/Offline
function getTwitch(twitchUserName) {
	$.ajax({
		type: "GET",
		url:  "https://api.twitch.tv/kraken/streams/" + twitchUserName,
		headers: {
			//Change Client ID Weekly
			'Client-ID': 'dhtxhmg8vey6qz5y964c3u15vmcssa'
		},
		success: function twitchData(data) {
			// If Stream Is Online Embed it to Cover
			if (data.stream !== null) {
				// Create twitch-embed ID for api
				// Give Height and Width to Stream
				const twitchembed = "<div id='twitch-embed' class='col-sm-12 twitch'></div>";
				//Embeds Needed Element to Page
				$('.embed').append(twitchembed);
				//Twitch Stream Parameters
				new Twitch.Embed("twitch-embed", {
					width: '97%',
					height: '100%',
					channel: twitchUserName,
					allowfullscreen: true,
					theme: 'dark',
				});
			//If Offline
			} else {
				// Embed Offline Header || Banner
				$('.embed').append(h1);
			}
		}
	})

}
getTwitch(twitchUserName)
