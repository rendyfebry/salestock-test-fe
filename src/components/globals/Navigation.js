import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, MenuItem, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../../salestock-logo.png'

import './Navigation.css'

class Navigation extends Component {
	render() {
		return (
			<Navbar>
				<Navbar.Header>
					<Navbar.Brand>
						<Link to="/">
							<Image src={logo} responsive alt="Salestock Logo" />
						</Link>
					</Navbar.Brand>
				</Navbar.Header>
				<Nav pullRight>
					<li role="presentation">
						<Link to="/products">Products</Link>
					</li>
					<NavDropdown eventKey={3} title="Hi, Rendy" id="basic-nav-dropdown">
						<li role="presentation">
							<Link to="/profile">Profile</Link>
						</li>
						<li role="presentation">
							<Link to="/settings">Settings</Link>
						</li>
						<MenuItem divider />
						<MenuItem eventKey={3.3}>Log Out</MenuItem>
					</NavDropdown>
				</Nav>
			</Navbar>
		)
	}
}

export default Navigation
