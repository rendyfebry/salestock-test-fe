import React from 'react'
import './App.css'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navigation from './components/globals/Navigation'
import Home from './pages/home'
import Products from './pages/products'
import ProductSingle from './pages/products/single'
import Settings from './pages/settings'
import Profile from './pages/profile'

const App = () => (
	<Router>
		<div className="App">
			<Navigation />
			<div>
				<Route exact path="/" component={Home} />
				<Route path="/products/:slug" component={ProductSingle} />
				<Route exact path="/products" component={Products} />
				<Route exact path="/profile" component={Profile} />
				<Route exact path="/settings" component={Settings} />
			</div>
		</div>
	</Router>
)

export default App
