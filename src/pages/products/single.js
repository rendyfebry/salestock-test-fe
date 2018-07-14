import React, { Component } from 'react'
import { Grid, Row, Col, Image, Table } from 'react-bootstrap'

class ProductSingle extends Component {
	render() {
		return (
			<div className="ProductSingle">
				<Grid>
					<Row>
						<Col xs={12} md={6} mdOffset={3}>
							<Image
								src="https://ss-imager-prod.freetls.fastly.net/www-images/480/product_images/fbd2b5a3a1e1bdbafe0a42a0c19f1509.jpg"
								responsive
							/>
							<h3>Elhepone Flowery Cold Shoulder Mini Dress</h3>
							<p>
								Warna : Black, Broken White, Grey, Navy, Red, dan Tosca (kiri ke
								kanan)
							</p>
							<Table striped hover>
								<thead>
									<tr>
										<th>Size</th>
										<th>Lingkar Dada</th>
										<th>Panjang Lengan</th>
										<th>Panjang</th>
										<th>Lingkar Pinggang</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>S</td>
										<td>90</td>
										<td>11</td>
										<td>90</td>
										<td>94</td>
									</tr>
									<tr>
										<td>M</td>
										<td>94</td>
										<td>12</td>
										<td>90</td>
										<td>98</td>
									</tr>
									<tr>
										<td>L</td>
										<td>100</td>
										<td>12</td>
										<td>92</td>
										<td>106</td>
									</tr>
									<tr>
										<td>XL</td>
										<td>110</td>
										<td>13</td>
										<td>95</td>
										<td>118</td>
									</tr>
								</tbody>
							</Table>
							<p>
								<strong>
									<span>Ukuran Berdasarkan Standar Sale Stock</span>
								</strong>
							</p>
							<p>Detil bahan : Brukat Lapis Furing</p>
							<p>**Detil baju : Resleting belakan</p>
							<p>Produk bisa dicoba dan dikembalikan: Ya</p>
						</Col>
					</Row>
				</Grid>
			</div>
		)
	}
}

export default ProductSingle
