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
			page: 1,
			perPage: 3,
			sort: 'newest',
		}
	}

	get productList() {
		if (this.state.isOnLoad && this.state.page === 1) {
			const dummyList = []

			for (let i = 0; i < 3; i++) {
				dummyList.push(<ProductItemPlaceholder key={i} />)
			}
			return dummyList
		}

		const productList = this.state.products.map(product => (
			<ProductItem {...product} key={product.slug} />
		))
		return productList
	}

	async fetchProducts(page) {
		this.setState({ isOnLoad: true })
		const response = await Product.GetAll(page, this.state.perPage, this.state.sort)

		if (response.status === 200 && response.data.error === 0) {
			this.setState({ products: response.data.data })
		}

		this.setState({ isOnLoad: false })
	}

	getInitialProducts() {
		this.fetchProducts(this.state.page)
	}

	initScrollSpy() {
		window.onscroll = async () => {
			let bottomOfWindow =
				document.documentElement.scrollTop + window.innerHeight ===
				document.documentElement.offsetHeight

			if (bottomOfWindow) {
				const nextPage = this.state.page + 1
				await this.fetchProducts(nextPage)
				this.setState({ page: nextPage })
			}
		}
	}

	componentDidMount() {
		this.getInitialProducts()
		this.initScrollSpy()
	}

	render() {
		return (
			<div className="Products">
				<Container>
					<Row>{this.productList}</Row>
					{this.state.isOnLoad ? (
						<div className="lds-ring">
							<div />
							<div />
							<div />
							<div />
						</div>
					) : null}
				</Container>
			</div>
		)
	}
}

export default Products
