import React, { Component } from 'react'
import { Image } from 'react-bootstrap'

class ProductDetailHeader extends Component {
	super(props) {
		this.props = props
	}

	get mainImage() {
		return this.props.images[0]
	}

	get priceFormated() {
		return `Rp ${this.props.price}`
	}

	render() {
		return (
			<div>
				<Image src={this.mainImage} responsive />
				<h3>{this.props.name}</h3>
				<p>{this.priceFormated}</p>
			</div>
		)
	}
}

export default ProductDetailHeader
