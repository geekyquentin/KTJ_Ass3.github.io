import React, { Component } from "react";
import { HashRouter as Router, Route, Redirect } from "react-router-dom";
import dashboardPage from "./pages/Dashboard/dashboardPage";
import SignUpForm from "./pages/SignInAndSignOut/SignUpForm";
import SignInForm from "./pages/SignInAndSignOut/SignInForm";
import Navbar from './Nav/Navbar';
class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<div className="appForm">
						<Navbar />

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
			</Router >
		);
	}
}

export default App;
