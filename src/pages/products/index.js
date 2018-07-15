import React, { Component } from 'react'
import { Container, Row } from 'reactstrap'

import ProductItem from '../../components/products/ProductItem'
import ProductItemPlaceholder from '../../components/products/ProductItemPlaceholder'
import Product from '../../models/product'

class Products extends Component {
	constructor(props) {
		super(props)
		this.state = {
			products: [],
			isOnLoad: true,
		}
	}

	get productList() {
		if (this.state.isOnLoad) {
			const dummyList = []

			for (let i = 0; i < 6; i++) {
				dummyList.push(<ProductItemPlaceholder key={i} />)
			}
			return dummyList
		}

		const productList = this.state.products.map(product => (
			<ProductItem {...product} key={product.slug} />
		))
		return productList
	}

	async componentDidMount() {
		const response = await Product.GetAll()

		if (response.status === 200 && response.data.error === 0) {
			this.setState({ products: response.data.data })
		}

		this.setState({ isOnLoad: false })
	}

	render() {
		return (
			<div className="Products">
				<Container>
					<Row className="show-grid">{this.productList}</Row>
				</Container>
			</div>
		)
	}
}

export default Products
