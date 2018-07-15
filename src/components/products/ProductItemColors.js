import React, { Component } from 'react'

import PropTypes from 'prop-types'

const propTypes = {
	color: PropTypes.arrayOf(PropTypes.string).isRequired,
}

class ProductItemColors extends Component {
	super(props) {
		this.props = props
	}

	render() {
		return (
			<div>
				<p>Warna: {this.props.colors.join(', ')}</p>
			</div>
		)
	}
}

ProductItemColors.PropTypes = propTypes

export default ProductItemColors
