import React, { Component } from 'react'
import { Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class ProductItem extends Component {
	super(props) {
		this.props = props
	}
	render() {
		return (
			<Col xs={12} md={4}>
				<Image src={this.props.images[0]} responsive />
				<h3>
					<Link to={`/products/${this.props.slug}`}>{this.props.name}</Link>
				</h3>
			</Col>
		)
	}
}

export default ProductItem
