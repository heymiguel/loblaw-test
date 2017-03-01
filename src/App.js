import React, { Component } from 'react';
import './App.css';
import ProductList from './ProductList.js';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Loblaw Digital Challenge Project</h2>
        </div>
        <ProductList></ProductList>
      </div>
    );
  }
}

export default App;
