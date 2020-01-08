import React from 'react';

export default class SearchBar extends React.Component{

  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockOnlyChange = this.handleInStockOnlyChange.bind(this);
  }

  handleFilterTextChange(e) {
    this.props.onHandleFilterTextChange(e.target.value);
  }
  handleInStockOnlyChange(e) {
    this.props.onHandleInStockOnlyChange(e.target.checked);
  }
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          onChange={this.handleFilterTextChange}
        />
        <p>
          <input
            type="checkbox"
            checked={this.props.inStockOnly}
            onChange={this.handleInStockOnlyChange}
          />
          Only show products in stock
        </p>
      </form>
    );
  }
}