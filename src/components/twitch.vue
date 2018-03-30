<template>
  <div id="twitch" class="d-flex justify-content-center">
    <div class="embed"></div>
  </div>
</template>
<script>
  import $ from "jquery";
  ///////////////////////////////////////////////////
  ///////////////////////////////////////////////////
  /////////////////////////////////////////////////// Twitch username
  const twitchUserName = 'moikapy';
  /// Create Offline Header||Banner
  const h1 = '<h1>MOIKApy</h1>';
  ///////////////////////////////////////////////////
  /////////////////////////////////////////////////// API call to see if Twitch Username is Online/Offline
  function getTwitch(twitchUserName, h1) {
  	$.ajax({
  		type: "GET",
  		url:  "https://api.twitch.tv/helix/streams/?" + twitchUserName,
  		headers: {
  			//Change Client ID Weekly
  			'Client-ID': 'dhtxhmg8vey6qz5y964c3u15vmcssa'
  		},
  		success: function twitchData(data) {
  			// If Stream Is Online Embed it to Cover
  			if (data.stream !== null) {
  				// Create twitch-embed ID for api
  				// Give Height and Width to Stream
  				const twitchembed = "<div id='twitch-embed' class='twitch'></div>";
  				//Embeds Needed Element to Page
  				$('.embed').append(twitchembed);
  				//Twitch Stream Parameters
  				new Twitch.Embed("twitch-embed", {
  					width: '100%',
  					height: '100%',
  					channel: twitchUserName,
  					allowfullscreen: true,
  					theme: 'dark',
  				});
          embed.addEventListener(Twitch.Embed.VIDEO_READY, () => {
            var player = embed.getPlayer();
            player.play();
          })
  			//If Offline
  			} else {
  				// Embed Offline Header || Banner
  				$('.embed').append(h1);
  			}
  		}
  	})

  }
  getTwitch(twitchUserName)


  export default {
    name: 'twitch',
    components:{},
    created() { // adds CDN to the component
      let ckeditor = document.createElement('script');    ckeditor.setAttribute('src',"https://embed.twitch.tv/embed/v1.js");
      document.head.appendChild(ckeditor);
    }
  }
</script>
<style>
  #twitch{
    background-color: indigo;
        margin-left: auto;
    margin-right: auto;
    z-index: 1;
  }
  #twitch .embed{
    height: 75vh;
    width: 100vw;
  }
  #twitch h1{
    padding: 2%;
    text-align:  center;
  }
  #twitch-embed{
    height: 100%;
    width: 100%;
  }
  @media screen and (max-width:767px){
    #twitch .embed{
      height: 90vh;
    }
  }
</style>
