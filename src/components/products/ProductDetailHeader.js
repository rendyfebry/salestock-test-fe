import React, { Component } from 'react'

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
				<img src={this.mainImage} className="ProductDetail__image" alt={this.props.name} />
				<h3 className="ProductDetail__title">{this.props.name}</h3>
				<p className="ProductDetail__price">{this.priceFormated}</p>
			</div>
		)
	}
}

export default ProductDetailHeader
