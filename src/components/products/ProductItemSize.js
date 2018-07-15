import React, { Component } from 'react'
import { Table } from 'reactstrap'

import ProductItemSizeRow from './ProductItemSizeRow'

class ProductItemlSize extends Component {
	get sizeList() {
		const sizeList = this.props.sizes.map(size => (
			<ProductItemSizeRow key={size.name} {...size} />
		))
		return sizeList
	}

	render() {
		return (
			<div>
				<Table striped hover className="ProductItem__size-table">
					<thead>
						<tr>
							<th>Size</th>
							<th>Lingkar Dada</th>
							<th>Panjang Lengan</th>
							<th>Panjang</th>
							<th>Lingkar Pinggang</th>
						</tr>
					</thead>
					<tbody>{this.sizeList}</tbody>
				</Table>
				<p>* Ukuran Berdasarkan Standar Sale Stock</p>
				<hr />
			</div>
		)
	}
}

export default ProductItemlSize
