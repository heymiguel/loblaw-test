import React, { Component } from 'react';
import './App.css';
import ProductListing from './ProductListing.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Loblaw Digital Challenge Project</h2>
        </div>
        <ProductListing></ProductListing>
      </div>
    );
  }
}

export default App;
