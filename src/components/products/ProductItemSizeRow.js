import React, { Component } from 'react'
import PropTypes from 'prop-types'

const propTypes = {
	name: PropTypes.string.isRequired,
	lingkarDada: PropTypes.number.isRequired,
	panjangLengan: PropTypes.number.isRequired,
	panjang: PropTypes.number.isRequired,
	lingkarPinggang: PropTypes.number.isRequired,
}

class ProductItemSizeRow extends Component {
	render() {
		return (
			<tr>
				<td>{this.props.name}</td>
				<td>{this.props.lingkarDada}</td>
				<td>{this.props.panjangLengan}</td>
				<td>{this.props.panjang}</td>
				<td>{this.props.lingkarPinggang}</td>
			</tr>
		)
	}
}

ProductItemSizeRow.propTypes = propTypes

export default ProductItemSizeRow
