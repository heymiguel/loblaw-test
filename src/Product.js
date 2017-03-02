import React, { Component } from 'react';

class Product extends Component {
  // constructor( props ) {
  //   super( props );

  // }
  render() {
    return (
      <div>
        <li className="product">
          <img src={this.props.thumbnail} alt={this.props.name}></img>
          <p className="product-name">{this.props.name}</p>
          <p className="product-color">{this.props.color}</p>
          <p className="product-price">${this.props.price} CAD</p>
          <p className="new-arrival">{this.props.badgeString}</p>
        </li>
      </div>
    );
  }
}

export default Product;