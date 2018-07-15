import React, { Component } from 'react'
import { Container, Row } from 'reactstrap'

import ProductItem from '../../components/products/ProductItem'

const productData = {
	name: 'Elhepone Flowery Cold Shoulder Mini Dress',
	slug: 'elhepone-flowery-cold-shoulder-mini-dress',
	price: 155000,
	category: 'dress',
	colors: ['Black', 'Broken White', 'Grey', 'Navy', 'Red', 'Tosca'],
	images: [
		'https://ss-imager-prod.freetls.fastly.net/www-images/480/product_images/fbd2b5a3a1e1bdbafe0a42a0c19f1509.jpg',
	],
	sizes: [
		{
			name: 'S',
			lingkarDada: 90,
			panjangLengan: 11,
			panjang: 90,
			lingkarPinggang: 94,
		},
		{
			name: 'M',
			lingkarDada: 94,
			panjangLengan: 12,
			panjang: 90,
			lingkarPinggang: 98,
		},
		{
			name: 'L',
			lingkarDada: 100,
			panjangLengan: 12,
			panjang: 92,
			lingkarPinggang: 106,
		},
		{
			name: 'XL',
			lingkarDada: 110,
			panjangLengan: 13,
			panjang: 95,
			lingkarPinggang: 118,
		},
	],
}

class ProductSingle extends Component {
	render() {
		return (
			<div className="ProductSingle">
				<Container>
					<Row>
						<ProductItem {...productData} isSinglePage />
					</Row>
				</Container>
			</div>
		)
	}
}

export default ProductSingle
