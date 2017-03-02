import React, { Component } from 'react';
import './Product.css';

class Product extends Component {
  render() {
    return (
      <div className="box is-half">
        <li className="product card ">
          <img className="card-image" src={ this.props.thumbnail } alt={ this.props.name }></img>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="product-name title is-3">
                  { this.props.name }
                </p>
                <p className="product-color subtitle is-6">
                  { this.props.color }
                </p>
                <p className="product-price subtitle is-4">$
                  { this.props.price } CAD</p>
                <p className="new-arrival tag is-small is-light">
                  { this.props.badgeString }
                </p>
              </div>
            </div>
          </div>
        </li>
      </div>
      );
  }
}

export default Product;