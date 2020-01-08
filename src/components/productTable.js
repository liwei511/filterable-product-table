import React from 'react';
import ProductCategoryRow from './productCategoryRow';
import ProductRow from './productRow';

export default class ProductTable extends React.Component {
  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;

    const rows = [];
    let lastCategory = null;
    this.props.products.forEach((product) => {
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow category={product.category} key={product.category}/>
        )
      }
      lastCategory = product.category;
      if (inStockOnly && !product.stocked) {
        return;
      }
      if (product.name.indexOf(filterText) === -1) {
        return;
      }
      rows.push(
        <ProductRow product={product} key={product.name}/>
      )
    })
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    )
  }
}