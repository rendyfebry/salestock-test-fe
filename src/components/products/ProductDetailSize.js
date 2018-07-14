import React, { Component } from 'react'
import { Table } from 'reactstrap'

class ProductDetailSize extends Component {
	render() {
		return (
			<div>
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
				<strong>Ukuran Berdasarkan Standar Sale Stock</strong>
			</div>
		)
	}
}

export default ProductDetailSize
