import React, { Component } from 'react';
import '../../css/App.css';
import '../../css/navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">MOIKApy</a>
      </nav>
    );
  }
}

export default Navbar;
