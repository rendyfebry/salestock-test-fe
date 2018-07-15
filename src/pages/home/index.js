import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'

const promos = [
	{
		title: 'USP Salestock',
		imageUrl:
			'https://imager-next.global.ssl.fastly.net/images/resized/480/widget_images/guest-abtest-usp-home-banner.jpg',
		url: 'https://www.salestockindonesia.com/promosi/usp-salestock',
	},
	{
		title: 'Coba Dulu Baru Bayar',
		imageUrl:
			'https://imager-next.global.ssl.fastly.net/images/resized/480/fb7f7004-9ee5-44e2-a4c2-f32e902389af.jpeg',
		url: 'https://www.salestockindonesia.com/promosi/coba-dulu-baru-bayar',
	},
	{
		title: 'Keuntungan Member',
		imageUrl:
			'https://imager-next.global.ssl.fastly.net/images/resized/480/widget_images/guest-abtest-member-benefit.jpg',
		url: 'https://www.salestockindonesia.com/promosi/5-keuntungan-ajaib-jadi-member',
	},
]

class Home extends Component {
	get promoList() {
		const PromoList = promos.map(promo => (
			<Col xs={12} md={4} key={promo.title}>
				<a href={promo.url}>
					<img src={promo.imageUrl} className="img-fluid" alt={`Promo ${promo.title}`} />
				</a>
			</Col>
		))
		return PromoList
	}
	render() {
		return (
			<div className="Home">
				<Container>
					<Row>{this.promoList}</Row>
				</Container>
			</div>
		)
	}
}

export default Home
