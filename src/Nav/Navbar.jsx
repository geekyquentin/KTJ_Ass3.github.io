import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import companyLogo from '../logo.ico';
import MediaQuery from 'react-responsive';

const Nav = styled.nav`
	 {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		position: fixed;
		width: 100%;
		padding: 0.7rem 2rem;
		background-color: #000;
		top: 0;
	}
	@media screen and (max-width: 768px) {
		 {
			padding-right: 1rem;
			padding-left: 1rem;
		}
	}
`;

const Navbar = () => {
	// const isMobile = MediaQuery('(min-width:768px)');
	// const bigName = 'Messaging Mafia';
	// const smallName = 'M M';
	return (
		<Nav className="navbar">
			<div className="iconText">
				<MediaQuery query="(min-width: 768px)">
					<img src={companyLogo} className="navbarLogo" alt="logo" />
				</MediaQuery>
				{/* <span className="logoName">{`${isMobile} ? ${bigName} : ${smallName}`}</span> */}
				<span className="logoName">Messaging Mafia</span>
			</div>
			<Burger />
		</Nav>
	);
};

export default Navbar;
