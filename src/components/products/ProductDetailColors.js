import React, { Component } from 'react'

class ProductDetailColors extends Component {
	super(props) {
		this.props = props
	}

	render() {
		return (
			<div>
				<p>Warna: {this.props.colors.join(', ')}</p>
			</div>
		)
	}
}

export default ProductDetailColors
