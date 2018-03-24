import React, { Component } from 'react';
import Navbar from './js/navbar.js';
import Stream from './js/stream.js';
import Footer from './js/footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
class App extends Component {
  render() {
    return (
      <div >
        <Navbar/>
        <Stream/>
        <Footer/>
      </div>
    );
  }
}

export default App;
