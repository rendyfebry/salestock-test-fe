import React, { Component } from 'react'
import { Col, Button } from 'reactstrap'

import iconShare from '../../assets/images/icon-share-grey.png'
import iconHeart from '../../assets/images/icon-heart-grey.png'

import './ProductItem.css'

class ProductItemPlaceholder extends Component {
	render() {
		return (
			<Col xs={12} md={4}>
				<div className="ProductItem__wrapper">
					<div className="square">
						<div className="ProductItem__image-wrapper" />
					</div>
					<div>
						<h3 className="ProductItem__title">
							<span className="loading-placeholder md" />
						</h3>
						<p className="ProductItem__price">
							<span className="loading-placeholder sm" />
						</p>
						<hr />
					</div>
					<div className="ProductItem__footer">
						<div className="ProductItem__footer-shareArea">
							<img src={iconHeart} alt="Like" />
							<span>Like</span>
						</div>
						<div className="ProductItem__footer-shareArea">
							<img src={iconShare} alt="Share" />
							<span>Share</span>
						</div>
						<div className="ProductItem__footer-buttonArea">
							<Button size="sm" disabled>
								Buy
							</Button>
						</div>
					</div>
				</div>
			</Col>
		)
	}
}

export default ProductItemPlaceholder
