import React from 'react';

export default class ProductRow extends React.Component {
  render() {
    const product = this.props.product;
    return (
      <tr>
        <td>
          {
            product.stocked ?
            product.name :
            <span style={{color: 'red'}}>
              {product.name}
            </span>
          }
        </td>
        <td>{product.price}</td>
      </tr>
    )
  }
}