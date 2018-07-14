import React, { Component } from 'react'

import logo from '../../logo.svg'
import Navigation from '../../components/globals/Navigation'

class Profile extends Component {
	render() {
		return (
			<div className="App">
				<Navigation />
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Profile</h1>
				</header>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
			</div>
		)
	}
}

export default Profile
