import React, { Component } from 'react'
import { Col, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

import iconShare from '../../assets/images/icon-share-grey.png'
import iconHeart from '../../assets/images/icon-heart-grey.png'
import './ProductItem.css'

class ProductItem extends Component {
	super(props) {
		this.props = props
	}

	get productSlug() {
		return `/products/${this.props.slug}`
	}

	get formattedPrice() {
		return this.props.price.toLocaleString('id')
	}

	render() {
		return (
			<Col xs={12} md={4}>
				<div className="ProductItem__wrapper">
					<Link to={this.productSlug}>
						<img
							src={this.props.images[0]}
							className="ProductItem__image"
							alt={this.props.name}
						/>
					</Link>
					<h3 className="ProductItem__title">
						<Link to={`/products/${this.props.slug}`}>{this.props.name}</Link>
					</h3>
					<p className="ProductItem__price">{this.formattedPrice}</p>
					<hr />
					<div className="ProductItem__footer">
						<div className="ProductItem__footer">
							<img src={iconHeart} alt="Like" />
							<span>Like</span>
						</div>
						<div className="ProductItem__footer">
							<img src={iconShare} alt="Share" />
							<span>Share</span>
						</div>
						<div className="ProductItem__footer-buttonArea">
							<Button className="btn-red" size="sm" color="danger">
								Buy
							</Button>
						</div>
					</div>
				</div>
			</Col>
		)
	}
}

export default ProductItem
