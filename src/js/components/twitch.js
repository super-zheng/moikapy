// IMPORTS
import React, { Component } from 'react';
// REDUX
import { getState } from 'redux';
// AXIOS
import axios from 'axios';
// CSS
import "../../css/twitch.css";

// ACTION
import FetchRequest from '../actions/FetchRequest.js';
import FetchSuccess from '../actions/FetchSuccess.js';
import FetchFailure from '../actions/FetchFailure.js';
// LOADER
import Loader from '../load/loader.js';
// VARIABLES
const api = 'https://api.twitch.tv/helix/users?login=relaxbeats&client_id=dodtr73g0wvdjl1qfd3mrde56t7oib';

// What is Rendered
class Twitchlive extends Component {

  componentWillMount(){
    this.props.store.subscribe(this.forceUpdate.bind(this));
    this.apiRequest();
    setTimeout( () => {
       this.dispatchFetchRequest();
     }, 5000)
  }
  // ,{headers:{client_id:'da80d25f9f7510d185a8996701bad8ed'}}
  apiRequest () {
    axios.get(api)
      .then(response => {
        const streams = response.data.featured.map(function(feat) {
        return feat.stream;
      });
        this.dispatchFetchSuccess()
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  dispatchFetchRequest(){
    this.props.store.dispatch(FetchRequest());
  }
  dispatchFetchSuccess () {
  this.props.store.dispatch(FetchSuccess());
}
    render() {
      const stateProps = this.props.store.getState();
      const status = "loading";
      return (
        <div>
        {status === "loading" ? (
             <Loader />
            ) : (
              <div></div>
            )
          }
        </div>
      )
    }
  }

export default Twitchlive;
