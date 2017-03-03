import React, { Component } from 'react';
import Product from './Product.js'
import axios from 'axios';
import './ProductList.css';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.initialFilter = this.initialFilter.bind(this);
    this.showMore = this.showMore.bind(this);
    this.sortAlphabetically = this.sortAlphabetically.bind(this);
    this.sortByPrice = this.sortByPrice.bind(this);
    this.restoreOriginal = this.restoreOriginal.bind(this);
    this.state = {
      originalList: [],
      productList: [],
      displayList: [],
      showItems: 20,
      aToZwasClicked: false,
      byPriceWasClicked: false,
      index: {
        start: 0,
        end: 20
      }
    };
  }
  render() {

    return (
      <div className="container">
        <div className="filters">
          <p className="subtitle">
            Sort by:
          </p>
          <button className="restore-original button is-dark" onClick={ this.restoreOriginal }>Restore</button>
          <button className="a-to-z button is-dark" onClick={ this.sortAlphabetically }>A to Z</button>
          <button className="by-price button is-dark" onClick={ this.sortByPrice }>by Price</button>
        </div>
        <section className="product-list">
          <ul className="columns is-multiline is-mobile ">
            { this.state.displayList.map((product, index) => {
                return (

                    <Product  
                              key={ index }
                              name={ product.productName } 
                              color={ product.productColor } 
                              price={ product.productPrice } 
                              badgeString={ product.productBadgeString } 
                              thumbnail={ product.thumbnails.b2 }>
                    </Product>
                )
              }) }
          </ul>
          <button className="show-more button is-info" onClick={ this.showMore }> show more </button>
        </section>
      </div>
      );
  }

  //sort functions
  //should always look at the latest version of the displayList
  // performs data manipulation before triggering rerender
  // simulates potential sorting on server side, depending on application
  sortAlphabetically() {
    let prodArray = this.state.productList;
    this.alphaZedSorter(prodArray);
    this.setState({
      productList: prodArray,
      aToZwasClicked: true,
      byPriceWasClicked: false
    });
    let tempArray = this.state.displayList;
    this.alphaZedSorter(tempArray);
    this.setState({
      displayList: tempArray
    });
  }

  restoreOriginal(){
    
    axios.get('https://joefresh-marketing-dev.s3.amazonaws.com/developer-interview/full-list.json')
      .then((result) => {
        this.setState({
          originalList: result.data.results
        });
      })
      .then(()=>{
        let tempArray = this.state.originalList.slice(0,this.state.index.end);
        this.setState({
          displayList: tempArray,
          aToZwasClicked: false,
          byPriceWasClicked: false
        });
      })
  }

  sortByPrice() {
    let prodArray = this.state.productList;
    this.priceSorter(prodArray);
    this.setState({
      productList: prodArray,
      byPriceWasClicked: true,
      aToZwasClicked: false
    });
    let tempArray = this.state.displayList;
    this.priceSorter(tempArray);
    this.setState({
      displayList: tempArray
    });
  }

  alphaZedSorter(arrayToSort){
    arrayToSort.sort((a, b) => {
      let aName = a.productName.toUpperCase();
      let bName = b.productName.toUpperCase();
      if (aName < bName) {
        return -1;
      }
      if (aName > bName) {
        return 1;
      }
      return 0;
    });
  }

  priceSorter(arrayToSort){
    arrayToSort.sort((a, b) => {
      return a.productPrice - b.productPrice;
    });
  }

  initialFilter(arrayToFilter) {
    let tempArray = arrayToFilter.slice(this.state.index.start, this.state.index.end);
    // initial display of 20.
    this.setState({
      displayList: tempArray
    });
  }

  showMore() {
    let start = this.state.index.start;
    let end = this.state.index.end;
    let tempArray = this.state.displayList;
    start += this.state.showItems;
    end += this.state.showItems;
    let newArray = tempArray.concat(this.state.productList.slice(start, end));
    if (this.state.byPriceWasClicked === true){
      this.priceSorter(newArray);
      this.setState({
        displayList: newArray
      });
    }
    if (this.state.aToZwasClicked === true){
      this.alphaZedSorter(newArray);
      this.setState({
        displayList: newArray
      });
    }

    this.setState({
      displayList: newArray,
      index: {
        start: start,
        end: end
      }
    });
  }

  componentDidMount() {
    // data update happens after initial mount of component, as per Reactdocs.
    // axios to manage get request
    // axios also handles onload/ init() for data.
    // as per challenge ensures data is not stored locally
    // ensures data is most up to date version of data.
    axios.get('https://joefresh-marketing-dev.s3.amazonaws.com/developer-interview/full-list.json')
      .then((result) => {
        this.setState({
          productList: result.data.results
        });
      })
      .then(() => {
        this.initialFilter(this.state.productList);
      });
  }
}
export default ProductList;