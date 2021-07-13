import React, { Component } from "react";
import { HashRouter as Router, Route, NavLink, Redirect } from "react-router-dom";
import dashboardPage from "./pages/Dashboard/dashboardPage";
import SignUpForm from "./pages/SignInAndSignOut/SignUpForm";
import SignInForm from "./pages/SignInAndSignOut/SignInForm";
import companyLogo from "./logo.ico";

import "./App.css";

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<div className="appForm">
						<div className="navbar">
							<div className="iconText"><img src={companyLogo} className="navbarLogo" alt="logo" /><span className="logoName">Messaging Mafia</span></div>
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

						<Route exact path="/" render={() => {
							return (
								<Redirect to="/dashboard" />
							)
						}} />
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
