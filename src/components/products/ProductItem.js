import React, { Component } from 'react'
import { Col, Image, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import iconShare from '../../assets/images/icon-share-grey.png'
import iconHeart from '../../assets/images/icon-heart-grey.png'
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
					<hr />
					<div class="ProductItem__footer">
						<div className="ProductItem__footer">
							<Image src={iconHeart} />
							<span>Like</span>
						</div>
						<div className="ProductItem__footer">
							<Image src={iconShare} />
							<span>Share</span>
						</div>
						<div className="ProductItem__footer-buttonArea">
							<Button className="btn-red">Buy</Button>
						</div>
					</div>
				</div>
			</Col>
		)
	}
}

export default ProductItem
