import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, MenuItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class Navigation extends Component {
	render() {
		return (
			<Navbar>
				<Navbar.Header>
					<Navbar.Brand>
						<Link to="/">SaleStock</Link>
					</Navbar.Brand>
				</Navbar.Header>
				<Nav pullRight>
					<li role="presentation">
						<Link to="/promo">Promo</Link>
					</li>
					<li role="presentation">
						<Link to="/help">Help</Link>
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
