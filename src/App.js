import React, { Component } from "react";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import dashboardPage from "./pages/dashboardPage";
import SignUpForm from "./pages/SignUpForm";
import SignInForm from "./pages/SignInForm";
import companyLogo from "./logo.ico";

import "./App.css";

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<div className="appForm">
						<div className="navbar">
							<div><img src={companyLogo} className="navbarLogo" alt="logo" /></div>
							<div className="pageSwitcher">
								<NavLink
									to="/dashboard"
									activeClassName="pageSwitcherItem-active"
									className="pageSwitcherItem"
								>
									Dashboard
								</NavLink>
								<NavLink
									to="/sign-in"
									activeClassName="pageSwitcherItem-active"
									className="pageSwitcherItem"
								>
									Sign In
								</NavLink>
								<NavLink
									to="/sign-up"
									activeClassName="pageSwitcherItem-active"
									className="pageSwitcherItem"
								>
									Sign Up
								</NavLink>
							</div>
						</div>

						<div className="formTitle disable-text-selection">
							<NavLink
								to="/sign-in"
								activeClassName="formTitleLink-active"
								className="formTitleLink"
							>
								Sign In
							</NavLink>
							<NavLink
								to="/sign-up"
								activeClassName="formTitleLink-active"
								className="formTitleLink"
							>
								Sign Up
							</NavLink>
						</div>
						<Route path="/dashboard" component={dashboardPage} />
						<Route path="/sign-up" component={SignUpForm} />
						<Route path="/sign-in" component={SignInForm} />
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
