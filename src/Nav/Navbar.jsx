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
	}
`;

const Navbar = () => {
	// const isMobile = MediaQuery('(min-width:768px)');
	// const bigName = 'Messaging Mafia';
	// const smallName = 'M M';
	return (
		<Nav>
			<div className="iconText">
				<img src={companyLogo} className="navbarLogo" alt="logo" />
				{/* <span className="logoName">{`${isMobile} ? ${bigName} : ${smallName}`}</span> */}
				<span className="logoName">
					<MediaQuery query="(min-width: 768px)">
						{(matches) => {
							return matches ? 'Messaging Mafia' : 'M M';
						}}
					</MediaQuery>
				</span>
			</div>
			<Burger />
		</Nav>
	);
};

export default Navbar;
