import React, { Component } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      enableSubmit: false,
    };
  }

  handleChangeEmail = (event) => {
    this.setState({ email: event.target.value }, this.validateForm);
  };

  handleChangePassword = (event) => {
    this.setState({ password: event.target.value }, this.validateForm);
  };

  validateForm = () => {
    const { email, password } = this.state;
    const isValidEmail = /\S+@\S+\.\S+/.test(email);
    const isValidPassword = password.length >= 8;
    this.setState({ enableSubmit: isValidEmail && isValidPassword });
  };

  handleLoginSubmit = (event) => {
    event.preventDefault();
    this.setState({ isLoggedIn: true });
    this.props.logIn(this.state.email, this.state.password);
  };

  render() {
    const { email, password, enableSubmit } = this.state;

    return (
      <React.Fragment>
        <div className={css(styles.appBody)}>
          <p>Login to access the full dashboard</p>
          <form onSubmit={this.handleLoginSubmit}>
            <div className={css(styles.inputGroup)}>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                className={css(styles.input)}
                value={email}
                onChange={this.handleChangeEmail}
              />
            </div>
            <div className={css(styles.inputGroup)}>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                className={css(styles.input)}
                value={password}
                onChange={this.handleChangePassword}
              />
            </div>
            <input
              type="submit"
              value="OK"
              className={css(styles.button)}
              disabled={!enableSubmit}
            />
          </form>
        </div>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  // ... your existing styles
});

Login.propTypes = {
  logIn: PropTypes.func,
};

Login.defaultProps = {
  logIn: () => {},
};

export default Login;
