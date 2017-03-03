import React, { Component } from 'react';
import './Product.css';

class Product extends Component {
  render() {
    return (
        <li className="column is-one-quarter-desktop is-one-third-tablet is-full-mobile product ">
          <div className="card "> 
            <img className="image" src={ this.props.thumbnail } alt={ this.props.name }></img>
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
          </div>
        </li>
      );
  }
}

export default Product;