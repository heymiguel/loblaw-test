import React, { Component } from 'react';
import Product from './Product.js'
import axios from 'axios';

class ProductList extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      productList: []
    };
  }
  render() {
    return (
      <div className="product-list">
        <ul>
          {this.state.productList.map(( product ) => {
            return (
              <li key={product.productId}>
                <img src={product.thumbnails.b2} alt={product.productName}></img>
                <p className="product-name">{product.productName}</p>
                <p className="product-color">{product.productColor}</p>
                <p className="product-price">${product.productPrice} CAD</p>
                <p className="new-arrival">{product.productBadgeString}</p>
              </li>
            )
          })}
        </ul>
      </div>
    );
  }

  // do any data manipulations BEFORE sending to render. 
  // pagination is going to be the big timesink.
  // TODO:
  // send filtered array to render.
  // setup AZ and price filters.


  componentDidMount() {
    // data update happens after initial mount of component, as per Reactdocs.
    // axios to simulate get request
    // ensures data is most up to date version of data.
    axios.get( 'https://joefresh-marketing-dev.s3.amazonaws.com/developer-interview/full-list.json' )
      .then(( result ) => {
        this.setState( {
          productList: result.data.results
        });
      });
  }

}
export default ProductList;