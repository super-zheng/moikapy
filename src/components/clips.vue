<template>
  <div id="clips-display"></div>
</template>

<script>
  const twitchUserName = 'moikapy';

  var httpRequest = new XMLHttpRequest();

  httpRequest.addEventListener('load', clipsLoaded);
  httpRequest.open('GET', 'moikapy');
  httpRequest.setRequestHeader('Client-ID', 'dhtxhmg8vey6qz5y964c3u15vmcssa');
  httpRequest.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json');
  httpRequest.send();
  function clipsLoaded() {
    var clipsDisplay = document.getElementById('clips-display'),
        clipList = JSON.parse(httpRequest.responseText);

    clipList.clips.forEach(function(clip, index, array) {
        clipItem = document.createElement('div');
        clipItem.innerHTML = clip.embed_html;
        clipsDisplay.appendChild(clipItem);
    });
  }
  export default {
    name: 'clips',
    created() { // adds CDN to the component
      let ckeditor = document.createElement('script');
      ckeditor.setAttribute('src', "https://embed.twitch.tv/embed/v1.js");
      document.head.appendChild(ckeditor);
    }
  }
</script>

<style>

</style>
