import React from 'react';
import SearchBar from './searchBar';
import ProductTable from './productTable';

export default class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false
    }
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockOnlyChange = this.handleInStockOnlyChange.bind(this);
  }
  handleFilterTextChange(filterText) {
    this.setState({filterText});
  }
  handleInStockOnlyChange(inStockOnly) {
    console.log({inStockOnly})
    this.setState({inStockOnly});
  }
  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onHandleFilterTextChange={this.handleFilterTextChange}
          onHandleInStockOnlyChange={this.handleInStockOnlyChange}
        ></SearchBar>
        <ProductTable
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          products={this.props.products}
        ></ProductTable>
      </div>
    )
  }
}