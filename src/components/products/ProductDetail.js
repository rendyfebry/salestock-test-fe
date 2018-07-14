import React, { Component } from 'react'
import { Col } from 'reactstrap'

import './ProductDetail.css'

import ProductDetailHeader from './ProductDetailHeader'
import ProductDetailColors from './ProductDetailColors'
import ProductDetailSize from './ProductDetailSize'
import ProductDetailExtra from './ProductDetailExtra'

class ProductDetail extends Component {
	super(props) {
		this.props = props
	}

	render() {
		return (
			<Col xs={12} md={{ size: 6, offset: 3 }}>
				<div className="ProductDetail__wrapper">
					<ProductDetailHeader
						name={this.props.name}
						images={this.props.images}
						price={this.props.price}
					/>
					<hr />
					<ProductDetailColors colors={this.props.colors} />
					<ProductDetailSize />
					<ProductDetailExtra />
				</div>
			</Col>
		)
	}
}

export default ProductDetail
