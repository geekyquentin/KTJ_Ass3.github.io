import React, { useState } from 'react';
import styled from 'styled-components';
import { HashRouter as Router, NavLink } from 'react-router-dom';

import '../App.css';

const Ul = styled.ul`
	list-style: none;
	display: flex;
	flex-flow: row nowrap;

	@media (max-width: 768px) {
		flex-flow: column nowrap;
		background-color: #2c2d2e;
		position: fixed;
		transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
		top: 0rem;
		right: 0;
		width: 9.5rem;
		padding-top: 3.5rem;
		transition: transform 0.2s ease-in-out;
		border-top-left-radius: 0.5rem;
		border-bottom-left-radius: 0.5rem;

		li {
			padding-top: 20px;
			font-size: 1.3rem;
		}

		li:last-child {
			padding-bottom: 2rem;
		}
	}
`;

const StyledBurger = styled.div`
	width: 2rem;
	height: 2rem;
	z-index: 20;
	display: none;
	cursor: pointer;

	@media (max-width: 768px) {
		display: flex;
		justify-content: space-around;
		flex-flow: column nowrap;
	}

	div {
		width: 2rem;
		height: 0.25rem;
		background-color: ${({ open }) => (open ? '#ccc' : '#333')};
		border-radius: 10px;
		transform-origin: 1px;
		transition: all 0.2s linear;

		&:nth-child(1) {
			transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
		}

		&:nth-child(2) {
			transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
			opacity: ${({ open }) => (open ? 0 : 1)};
		}

		&:nth-child(3) {
			transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
		}
	}
`;

const Burger = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<StyledBurger open={open} onClick={() => setOpen(!open)}>
				<div />
				<div />
				<div />
			</StyledBurger>
			<Router>
				<Ul open={open}>
					<li>
						<NavLink
							to="/dashboard"
							onClick={() => setOpen(!open)}
							activeClassName="pageSwitcherItem-active"
							className="pageSwitcherItem UHA"
						>
							Dashboard
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/sign-in"
							onClick={() => setOpen(!open)}
							activeClassName="pageSwitcherItem-active"
							className="pageSwitcherItem UHA"
						>
							Sign In
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/sign-up"
							onClick={() => setOpen(!open)}
							activeClassName="pageSwitcherItem-active"
							className="pageSwitcherItem UHA"
						>
							Sign Up
						</NavLink>
					</li>
				</Ul>
			</Router>
		</>
	);
};

export default Burger;
