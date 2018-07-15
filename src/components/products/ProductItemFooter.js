import React, { Component } from 'react'
import { Button } from 'reactstrap'

import iconShare from '../../assets/images/icon-share-grey.png'
import iconHeart from '../../assets/images/icon-heart-grey.png'

class ProductItemFooter extends Component {
	render() {
		return (
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
		)
	}
}

export default ProductItemFooter
