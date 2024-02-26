import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./loginPage.css";

class LoginPage extends Component {
  state = {
    redirectToHome: false,
  };

  redirectToHome = () => {
    this.setState({ redirectToHome: true });
  };

  render() {
    if (this.state.redirectToHome) {
      return <Redirect to="/homePage" />;
    }

    return (
      <div className="container">
        <h1>Create Account</h1>
        <div className="form-group">
          <input type="text" placeholder="Image URL" />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Full Name" />
        </div>
        <div className="form-group">
          <input type="tel" placeholder="Phone" />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email" />
        </div>
        <div className="form-group">
          <input type="password" placeholder="Password" />
        </div>
        <button className="btn-signup" onClick={this.redirectToHome}>
          Sign Up
        </button>
      </div>
    );
  }
}

export default LoginPage;
