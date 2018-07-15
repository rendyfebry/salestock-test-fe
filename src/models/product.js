import Axios from 'axios'

const Product = {
	GetAll: () => {
		const url = `/api/products`

		return Axios.get(url)
	},
	GetProductBySlug: slug => {
		const url = `/api/products/${slug}`

		return Axios.get(url)
	},
}

export default Product
