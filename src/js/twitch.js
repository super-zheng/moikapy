// IMPORTS
import React, { Component } from 'react';
import logo from '../logo.svg';
import Twitch from './twitch.js'
import $ from 'jquery';
import '../css/footer.css';

// VARIABLES
const API = 'https://api.twitch.tv/helix/users';
const CALL = 'MOIKApy';
// What is Rendered
class Twitch extends Component {

  constructor(props) {
   super(props);
   this.state ={ isLoading: true}
   this.state = {
     stream: [],
   };
 }

 componentDidMount() {
   fetch(API + CALL,{
     method: 'GET',
     headers: {
       'Client-ID':'dodtr73g0wvdjl1qfd3mrde56t7oib',
     },
   });
     .then(response => response.json())
     .then(data => this.setState({ stream: data.stream }));
 }
  render() {
    const { stream } = this .state;
    // If Stream Is Online Embed it to Cover

    return (
      if (stream !== null) {
        // Create twitch-embed ID for api
        // Give Height and Width to Stream
        const twitchembed = "<div id='twitch-embed' class='col-sm-12 twitch'></div>";
        //Embeds Needed Element to Page
        $('.embed').append(CALL);
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
    );
  }
}

export default Twitch;
