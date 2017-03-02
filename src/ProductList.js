import React, { Component } from 'react';
import Product from './Product.js'
import axios from 'axios';

class ProductList extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      productList: [],
      displayList: []
    };
  }
  render() {
    return (
      <section className="product-list">
        <ul>
          {this.state.productList.map(( product ) => {
            return (
              <Product
                key={product.productId}
                name={product.productName}
                color={product.productColor}
                price={product.productPrice}
                badgeString={product.productBadgeString}
                thumbnail={product.thumbnails.b2}
                altText={product.productName}
              ></Product>
            )
          })}
        </ul>
        <div className="filters">
          <button className="a-to-z">A to Z</button>
          <button className="by-price">by Price</button>
        </div>
      </section>
    );
  }

  // do any data manipulations BEFORE sending to render. 
  // TODO:
  // send filtered array to render.
  // setup AZ and price filters.
  componentDidUpdate( prevProps, prevState ) {
    window.scrollTo( 0, 500 )
  }

  componentDidMount() {
    // data update happens after initial mount of component, as per Reactdocs.
    // axios to manage get request
    // as per challenge ensures data is not stored locally
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