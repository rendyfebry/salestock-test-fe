import React, { Component } from 'react'

import PropTypes from 'prop-types'

const propTypes = {
	color: PropTypes.arrayOf(PropTypes.string),
}

class ProductItemColors extends Component {
	render() {
		return (
			<div>
				<p>Warna: {this.props.colors.join(', ')}</p>
			</div>
		)
	}
}

ProductItemColors.propTypes = propTypes

export default ProductItemColors
