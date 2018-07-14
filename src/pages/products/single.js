import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

import ProductDetailHeader from '../../components/products/ProductDetailHeader'
import ProductDetailColors from '../../components/products/ProductDetailColors'
import ProductDetailSize from '../../components/products/ProductDetailSize'
import ProductDetailExtra from '../../components/products/ProductDetailExtra'

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
						<Col xs={12} md={6} mdOffset={3}>
							<ProductDetailHeader
								name={productData.name}
								images={productData.images}
								price={productData.price}
							/>
							<hr />
							<ProductDetailColors colors={productData.colors} />
							<ProductDetailSize />
							<ProductDetailExtra />
						</Col>
					</Row>
				</Grid>
			</div>
		)
	}
}

export default ProductSingle
