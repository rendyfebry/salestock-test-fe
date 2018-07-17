import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Col, Button } from 'reactstrap'

import iconShare from '../../assets/images/icon-share-grey.png'
import iconHeart from '../../assets/images/icon-heart-grey.png'

import './ProductItem.css'

const propTypes = {
	isSinglePage: PropTypes.bool,
}

const defaultProps = {
	isSinglePage: false,
}

class ProductItemPlaceholder extends Component {
	get descriptionSection() {
		const DescriptionSection = this.props.isSinglePage ? (
			<div>
				<p>
					<span className="loading-placeholder md" />
				</p>
				<hr />
				<p>
					<span className="loading-placeholder" />
				</p>
				<p>
					<span className="loading-placeholder" />
				</p>
				<p>
					<span className="loading-placeholder md" />
				</p>
				<p>
					<span className="loading-placeholder" />
				</p>
				<p>
					<span className="loading-placeholder" />
				</p>
				<p>
					<span className="loading-placeholder md" />
				</p>
				<hr />
			</div>
		) : null
		return DescriptionSection
	}

	render() {
		return (
			<Col xs={12} md={{ size: 6, offset: 3 }}>
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
					{this.descriptionSection}
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

ProductItemPlaceholder.propTypes = propTypes
ProductItemPlaceholder.defaultProps = defaultProps

export default ProductItemPlaceholder
