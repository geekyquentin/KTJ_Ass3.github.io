import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { Helmet } from 'react-helmet';
import "./SignInAndSignOut.css";
import "../../Alert"
class SignUpForm extends Component {
    constructor() {
        super();

        this.state = {
            email: "",
            password: "",
            name: "",
            hasAgreed: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let target = event.target;
        let value = target.type === "checkbox" ? target.checked : target.value;
        let name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log("The form was submitted with the following data:");
        console.log(this.state);
    }

    render() {
        return (
            <div className="totalForm">
                <Helmet>
                    <title>Messaging Mafia | Sign Up</title>
                </Helmet>
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
                <div className="formCenter">
                    <form onSubmit={this.handleSubmit} className="formFields">
                        <div className="formField">
                            <label className="formFieldLabel" htmlFor="name">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="formFieldInput"
                                placeholder="Enter your full name"
                                name="name"
                                value={this.state.name}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="formField">
                            <label className="formFieldLabel" htmlFor="email">
                                E-Mail Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="formFieldInput"
                                placeholder="Enter your email"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="formField">
                            <label className="formFieldLabel" htmlFor="email">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                id="number"
                                className="formFieldInput"
                                placeholder="Enter your phone number"
                                name="email"
                                value={this.state.number}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="formField">
                            <label className="formFieldLabel" htmlFor="password">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="formFieldInput"
                                placeholder="Enter your password"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="formField">
                            <label className="formFieldLabel" htmlFor="password">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="formFieldInput"
                                placeholder="Confirm your password"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                        </div>

                        <div className="formField">
                            <label className="formFieldCheckboxLabel  disable-text-selection">
                                <input
                                    className="formFieldCheckbox"
                                    type="checkbox"
                                    name="hasAgreed"
                                    value={this.state.hasAgreed}
                                    onChange={this.handleChange}
                                />{" "}
                                I agree all statements in{" "}
                                <a href="null" className="formFieldTermsLink">
                                    terms of service
                                </a>
                            </label>
                        </div>

                        <div className="formField">
                            <button className="formFieldButton">Sign Up</button>{" "}
                            <Link to="/sign-in" className="formFieldLink">
                                Already have an account?
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
export default SignUpForm;
