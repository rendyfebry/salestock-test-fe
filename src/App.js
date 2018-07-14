import React from 'react'
import './App.css'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './pages/home'
import Products from './pages/products'
import ProductSingle from './pages/products/single'
import Help from './pages/help'
import Settings from './pages/settings'
import Profile from './pages/profile'

const App = () => (
	<Router>
		<div>
			<Route exact path="/" component={Home} />
			<Route
				path="/products/elhepone-flowery-cold-shoulder-mini-dress"
				component={ProductSingle}
			/>
			<Route exact path="/products" component={Products} />
			<Route exact path="/help" component={Help} />
			<Route exact path="/profile" component={Profile} />
			<Route exact path="/settings" component={Settings} />
		</div>
	</Router>
)

export default App
