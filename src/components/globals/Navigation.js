import React, { Component } from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'

class Navigation extends Component {
	render() {
		return (
			<Navbar>
				<Navbar.Header>
					<Navbar.Brand>
						<a href="#home">SaleStock</a>
					</Navbar.Brand>
				</Navbar.Header>
				<Nav pullRight>
					<NavItem eventKey={1} href="#">
						Promo
					</NavItem>
					<NavItem eventKey={2} href="#">
						Help
					</NavItem>
					<NavDropdown eventKey={3} title="Hi, Rendy" id="basic-nav-dropdown">
						<MenuItem eventKey={3.1}>Profile</MenuItem>
						<MenuItem eventKey={3.2}>Settings</MenuItem>
						<MenuItem divider />
						<MenuItem eventKey={3.3}>Log Out</MenuItem>
					</NavDropdown>
				</Nav>
			</Navbar>
		)
	}
}

export default Navigation
