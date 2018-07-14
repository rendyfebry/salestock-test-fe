import React from 'react'
import './App.css'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './pages/home'
import Promo from './pages/promo'
import Help from './pages/help'
import Settings from './pages/settings'
import Profile from './pages/profile'

const App = () => (
	<Router>
		<div>
			<Route exact path="/" component={Home} />
			<Route path="/promo" component={Promo} />
			<Route path="/help" component={Help} />
			<Route path="/profile" component={Profile} />
			<Route path="/settings" component={Settings} />
		</div>
	</Router>
)

export default App
