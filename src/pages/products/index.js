import React, { Component } from 'react'
import { Grid, Row, Col, Image } from 'react-bootstrap'

import Navigation from '../../components/globals/Navigation'

class Promo extends Component {
	render() {
		return (
			<div className="App">
				<Navigation />
				<div>
					<Grid>
						<Row className="show-grid">
							<Col xs={12} md={4}>
								<Image
									src="https://ss-imager-prod.freetls.fastly.net/www-images/480/product_images/f1f19d0b4f413388031408e47de8b0b8.jpg"
									responsive
								/>
								<h3>Aridatha Plain Drapped Midi Dress</h3>
							</Col>
							<Col xs={12} md={4}>
								<Image
									src="https://ss-imager-prod.freetls.fastly.net/www-images/480/product_images/0c0bf8024b8b627db756ddb1f050bee1.jpg"
									responsive
								/>
								<h3>Zalifa Brukat Flare Mini Dress</h3>
							</Col>
							<Col xs={12} md={4}>
								<Image
									src="https://ss-imager-prod.freetls.fastly.net/www-images/480/product_images/00cc30c2bcb967a9dbb87fe6f32e2e65.jpg"
									responsive
								/>
								<h3>Gyamaru Lace Drapped Mini Dress</h3>
							</Col>
							<Col xs={12} md={4}>
								<Image
									src="https://ss-imager-prod.freetls.fastly.net/www-images/480/product_images/608d4411aad8d3eef5f35235a74bd0a7.jpg"
									responsive
								/>
								<h3>Helsexia Plain V-Neck Mini Dress</h3>
							</Col>
							<Col xs={12} md={4}>
								<Image
									src="https://ss-imager-prod.freetls.fastly.net/www-images/480/product_images/11dfe4b4a43e83e6d49e8b2eea167491.jpg"
									responsive
								/>
								<h3>Foyuilzha Brukat Cape Mini Dress</h3>
							</Col>
							<Col xs={12} md={4}>
								<Image
									src="https://ss-imager-prod.freetls.fastly.net/www-images/480/product_images/fbd2b5a3a1e1bdbafe0a42a0c19f1509.jpg"
									responsive
								/>
								<h3>Elhepone Flowery Cold Shoulder Mini Dress</h3>
							</Col>
						</Row>
					</Grid>
				</div>
			</div>
		)
	}
}

export default Promo
