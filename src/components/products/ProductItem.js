import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Col } from 'reactstrap'
import { Link } from 'react-router-dom'

import ProductItemColors from './ProductItemColors'
import ProductItemSize from './ProductItemSize'
import ProductItemExtra from './ProductItemExtra'
import ProductItemFooter from './ProductItemFooter'

import './ProductItem.css'

const propTypes = {
	name: PropTypes.string.isRequired,
	slug: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	images: PropTypes.arrayOf(PropTypes.string).isRequired,
	categories: PropTypes.arrayOf(PropTypes.string),
	colors: PropTypes.arrayOf(PropTypes.string),
	sizes: PropTypes.arrayOf(PropTypes.object),
	isSinglePage: PropTypes.bool,
}

const defaultProps = {
	categories: [],
	colors: [],
	sizes: [],
	isSinglePage: false,
}

class ProductItem extends Component {
	get productSlug() {
		return `/products/${this.props.slug}`
	}

	get imageSection() {
		const ImageSection = this.props.isSinglePage ? (
			<div className="square">
				<div className="ProductItem__image-wrapper">
					<img
						src={this.props.images[0]}
						className="ProductItem__image single"
						alt={this.props.name}
					/>
				</div>
			</div>
		) : (
			<div className="square">
				<div className="ProductItem__image-wrapper">
					<Link to={this.productSlug}>
						{
							<img
								src={this.props.images[0]}
								className="ProductItem__image"
								alt={this.props.name}
							/>
						}
					</Link>
				</div>
			</div>
		)

		return ImageSection
	}

	get headerSection() {
		const formattedPrice = this.props.price.toLocaleString('id')
		const HeaderSection = this.props.isSinglePage ? (
			<div>
				<h3 className="ProductItem__title single">{this.props.name}</h3>
				<p className="ProductItem__price single">{formattedPrice}</p>
				<hr />
			</div>
		) : (
			<div>
				<h3 className="ProductItem__title">
					<Link to={`/products/${this.props.slug}`}>{this.props.name}</Link>
				</h3>
				<p className="ProductItem__price">{formattedPrice}</p>
				<hr />
			</div>
		)

		return HeaderSection
	}

	get descriptionSection() {
		const DescriptionSection = this.props.isSinglePage ? (
			<div>
				<ProductItemColors colors={this.props.colors} />
				<ProductItemSize sizes={this.props.sizes} />
				<ProductItemExtra />
				<hr />
			</div>
		) : null
		return DescriptionSection
	}

	render() {
		return (
			<Col xs={12} md={this.props.isSinglePage ? { size: 6, offset: 3 } : 4}>
				<div className="ProductItem__wrapper">
					{this.imageSection}
					{this.headerSection}
					{this.descriptionSection}
					<ProductItemFooter />
				</div>
			</Col>
		)
	}
}

ProductItem.propTypes = propTypes
ProductItem.defaultProps = defaultProps

export default ProductItem
