import Axios from 'axios'

const Product = {
	GetAll: (page = 1, perPage = 6, sort = 'newest') => {
		const url = `/api/products?page=${page}&perPage=${perPage}&sort=${sort}`

		return Axios.get(url)
	},
	GetProductBySlug: slug => {
		const url = `/api/products/${slug}`

		return Axios.get(url)
	},
}

export default Product
