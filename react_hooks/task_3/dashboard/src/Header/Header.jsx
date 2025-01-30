import React from "react";
import logo from "../assets/holberton-logo.jpg";
import { StyleSheet, css } from "aphrodite";
import { AppContext } from "../Context/context";

class Header extends React.Component {
  static contextType = AppContext;

  render() {
    const { user, logOut } = this.context;

    return (
      <>
        <header className={css(styles.appHeader)}>
          <img src={logo} className={css(styles.appLogo)} alt="logo" />
          <h1>School dashboard</h1>
        </header>
        {user.isLoggedIn && (
          <section id="logoutSection">
            Welcome {user.email} (
            <span onClick={logOut} className={css(styles.logoutLink)}>
              logout
            </span>
            )
          </section>
        )}
      </>
    );
  }
}

const styles = StyleSheet.create({
  appHeader: {
    backgroundColor: "#fff",
    borderBottom: "3px solid #e0354b",
    height: "200px",
  },
  appLogo: {
    width: "200px",
    height: "200px",
  },
  logoutLink: {
    cursor: "pointer",
    color: "#e0354b",
  },
});

export default Header;
