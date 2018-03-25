import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// REDUCER
import TwitchApp from './js/reducer/TwitchApp.js';
// COMPONENTS
import Navbar from './js/components/navbar.js';
import Twitchlive from './js/components/twitch.js';
import Footer from './js/components/footer.js';
// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar/>
        <Twitchlive store={store} />
        <Footer/>
      </div>
    );
  }
}

// import registerServiceWorker from './registerServiceWorker';

//initialize store
let store = createStore(TwitchApp)

ReactDOM.render(
  <Provider store = { store }>
  <App/>
  </Provider>,
  document.getElementById('root')
)
// registerServiceWorker();
