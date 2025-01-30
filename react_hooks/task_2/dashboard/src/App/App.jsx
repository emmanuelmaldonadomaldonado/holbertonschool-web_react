import React, { Component } from "react";
import { AppContext } from "../Context/context";
// ... other imports

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
      user: {
        email: "",
        password: "",
        isLoggedIn: false,
      },
      logOut: this.logOut,
    };
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  logIn = (email, password) => {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true,
      },
    });
  };

  logOut = () => {
    this.setState({
      user: {
        email: "",
        password: "",
        isLoggedIn: false,
      },
    });
  };

  // ... handleDisplayDrawer and handleHideDrawer methods

  render() {
    const { user, logOut, displayDrawer } = this.state;

    return (
      <AppContext.Provider value={{ user, logOut }}>
        <Notifications
          displayDrawer={displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
        />
        <div className="App">
          <Header />
          <main className="App-body">
            {user.isLoggedIn ? <CourseList /> : <Login logIn={this.logIn} />}
          </main>
          <Footer />
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;
