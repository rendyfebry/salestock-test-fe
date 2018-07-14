import React, { Component } from 'react'
import { Grid, Row } from 'react-bootstrap'

import ProductDetail from '../../components/products/ProductDetail'

const productData = {
	name: 'Elhepone Flowery Cold Shoulder Mini Dress',
	slug: 'elhepone-flowery-cold-shoulder-mini-dress',
	price: 155000,
	category: 'dress',
	colors: ['Black', 'Broken White', 'Grey', 'Navy', 'Red', 'Tosca'],
	images: [
		'https://ss-imager-prod.freetls.fastly.net/www-images/480/product_images/fbd2b5a3a1e1bdbafe0a42a0c19f1509.jpg',
	],
}

class ProductSingle extends Component {
	render() {
		return (
			<div className="ProductSingle">
				<Grid>
					<Row>
						<ProductDetail {...productData} />
					</Row>
				</Grid>
			</div>
		)
	}
}

export default ProductSingle
