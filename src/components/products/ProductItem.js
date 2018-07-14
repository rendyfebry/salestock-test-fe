import React, { Component } from 'react'
import { Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './ProductItem.css'

class ProductItem extends Component {
	super(props) {
		this.props = props
	}
	render() {
		return (
			<Col xs={12} md={4}>
				<div className="ProductItem__wrapper">
					<Link to={`/products/${this.props.slug}`}>
						<Image
							src={this.props.images[0]}
							responsive
							className="ProductItem__image"
						/>
					</Link>
					<h3 className="ProductItem__title">
						<Link to={`/products/${this.props.slug}`}>{this.props.name}</Link>
					</h3>
					<p className="ProductItem__price">{this.props.price}</p>
				</div>
			</Col>
		)
	}
}

export default ProductItem
