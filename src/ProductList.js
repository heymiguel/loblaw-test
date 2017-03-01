import React, { Component } from 'react';
import NewArrivals from './data.json';
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
      <div>
        <p>words</p>
      </div>
    );
  }

  // refresh() {
  //   if ( NewArrivals.results !== null ) {
  //     let incomingProducts = this.state.productList;
  //     incomingProducts = NewArrivals.results;
  //     this.setState( {
  //       productList: incomingProducts
  //     });
  //     console.log( this.state );
  //   }


  // }

  componentDidMount() {
    axios.get( 'https://joefresh-marketing-dev.s3.amazonaws.com/developer-interview/full-list.json' )
      .then(( result ) => {
        this.setState( {
          productList: result.data.results
        });
      });
  }

}
export default ProductList;