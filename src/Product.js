import React, { Component } from 'react';
import './Product.css';

class Product extends Component {
  render() {
    return (
      <div>
        <li className="product card">
          <img className="card-image" src={this.props.thumbnail} alt={this.props.name}></img>
          <div className="card-content"> 
            <div className="media">
              <div className="media-content"> 
                <p className="product-name title is-4">{this.props.name}</p>
                <p className="product-color subtitle is-6">{this.props.color}</p>
                <p className="new-arrival">{this.props.badgeString}</p>
              </div>
              <p className="product-price">${this.props.price} CAD</p>
              
            </div>
            
          </div>
          
        </li>
      </div>
    );
  }
}

export default Product;