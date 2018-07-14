import React, { Component } from 'react'

import logo from '../../assets/images/logo.svg'

class Settings extends Component {
	render() {
		return (
			<div className="Settings">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Settings</h1>
				</header>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
			</div>
		)
	}
}

export default Settings
