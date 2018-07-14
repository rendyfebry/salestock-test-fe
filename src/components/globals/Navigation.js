import React from 'react'
import {
	Collapse,
	Container,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from 'reactstrap'
import { Link } from 'react-router-dom'

import logo from '../../assets/images/salestock-logo.png'
import './Navigation.css'

class Navigation extends React.Component {
	constructor(props) {
		super(props)

		this.toggle = this.toggle.bind(this)
		this.state = { isOpen: false }
	}
	toggle() {
		this.setState({ isOpen: !this.state.isOpen })
	}
	render() {
		return (
			<div>
				<Navbar color="light" light expand="md" fixed="top">
					<Container>
						<NavbarBrand href="/">
							<img src={logo} alt="Salestock logo" />
						</NavbarBrand>
						<NavbarToggler onClick={this.toggle} />
						<Collapse isOpen={this.state.isOpen} navbar>
							<Nav className="ml-auto" navbar>
								<NavItem>
									<Link to="/products" className="nav-link">
										Products
									</Link>
								</NavItem>
								<UncontrolledDropdown nav inNavbar>
									<DropdownToggle nav caret>
										Hi, Rendy
									</DropdownToggle>
									<DropdownMenu right>
										<DropdownItem>Profile</DropdownItem>
										<DropdownItem>Settings</DropdownItem>
										<DropdownItem divider />
										<DropdownItem>Logout</DropdownItem>
									</DropdownMenu>
								</UncontrolledDropdown>
							</Nav>
						</Collapse>
					</Container>
				</Navbar>
			</div>
		)
	}
}

export default Navigation
