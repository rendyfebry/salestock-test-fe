import React, { Component } from 'react'
import { Container, Row } from 'reactstrap'

import ProductItem from '../../components/products/ProductItem'
import ProductItemPlaceholder from '../../components/products/ProductItemPlaceholder'
import Product from '../../models/product'

class ProductSingle extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isOnLoad: true,
			product: {
				name: '',
				slug: '',
				price: 0,
				images: [],
			},
		}
	}

	async componentDidMount() {
		const slug = this.props.match.params.slug
		const response = await Product.GetProductBySlug(slug)

		if (response.status === 200 && response.data.error === 0) {
			this.setState({ product: response.data.data })
		}
		this.setState({ isOnLoad: false })
	}

	render() {
		return (
			<div className="ProductSingle">
				<Container>
					<Row>
						{this.state.isOnLoad ? (
							<ProductItemPlaceholder isSinglePage />
						) : (
							<ProductItem {...this.state.product} isSinglePage />
						)}
					</Row>
				</Container>
			</div>
		)
	}
}

export default ProductSingle
