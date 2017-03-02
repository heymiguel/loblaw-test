import React, { Component } from 'react';
import Product from './Product.js'
import axios from 'axios';

class ProductList extends Component {
  constructor( props ) {
    super( props );
    this.initialFilter = this.initialFilter.bind( this );
    this.showMore = this.showMore.bind( this );
    this.state = {
      productList: [],
      displayList: [],
      index: {
        start: 0,
        end: 20
      }
    };
  }
  render() {

    return (
      <div>  
        <div className="filters">
            <button className="a-to-z">A to Z</button>
            <button className="by-price">by Price</button>
        </div>
        <section className="product-list">
          <ul>
            {this.state.displayList.map(( product,index ) => {
              return (
                <Product
                  key={index}
                  name={product.productName}
                  color={product.productColor}
                  price={product.productPrice}
                  badgeString={product.productBadgeString}
                  thumbnail={product.thumbnails.b2}
                ></Product>
              )
            })}
          </ul>
          <button className="show-more" onClick={this.showMore}> show more </button>
          </section>
      </div>
    );
  }

  initialFilter( arrayToFilter ) {
    let tempArray = arrayToFilter.slice( this.state.index.start, this.state.index.end );
    // initial display of 20.
    // also sets up the manipulation array separate from initial product list (maintaining immutability on original product list)
    this.setState( {
      displayList: tempArray
    });
  }

  showMore(){
    let start = this.state.index.start;
    let end = this.state.index.end;
    let tempArray = this.state.displayList;
    start += 20;
    end += 20;
    let newArray = tempArray.concat(this.state.productList.slice(start, end));
    this.setState({
      displayList: newArray,
      index:{
        start: start,
        end: end
      }
    });
  }

  // do any data manipulations BEFORE sending to render. 
  // TODO:
  // send filtered array to render.
  // setup AZ and price filters.
  componentDidUpdate( prevProps, prevState ) {
    window.scrollTo( 0, 100 )
  }

  componentDidMount() {
    // data update happens after initial mount of component, as per Reactdocs.
    // axios to manage get request
    // axios also handles onload/ init() for data.
    // as per challenge ensures data is not stored locally
    // ensures data is most up to date version of data.
    axios.get( 'https://joefresh-marketing-dev.s3.amazonaws.com/developer-interview/full-list.json' )
      .then(( result ) => {
        this.setState( {
          productList: result.data.results
        });
      })
      .then(() => {
        this.initialFilter( this.state.productList );
      });
  }

}
export default ProductList;