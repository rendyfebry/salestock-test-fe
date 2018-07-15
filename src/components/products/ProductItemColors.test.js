import React from 'react'
import { shallow, render } from 'enzyme'

import ProductItemColors from './ProductItemColors'

const colors = ['red', 'green', 'blue']

test('renders without crashing', () => {
	shallow(<ProductItemColors colors={colors} />)
})

test('render the colors text correctly', () => {
	const element = render(<ProductItemColors colors={colors} />)
	const expectedText = `Warna: ${colors.join(', ')}`
	expect(element.text()).toEqual(expectedText)
})
