import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import companyLogo from '../logo.ico';

const Nav = styled.nav`
	 {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
`;

const Navbar = () => {
	return (
		<Nav>
			<div className="iconText">
				<img src={companyLogo} className="navbarLogo" alt="logo" />
				<span className="logoName">Messaging Mafia</span>
			</div>
			<Burger />
		</Nav>
	);
};

export default Navbar;
