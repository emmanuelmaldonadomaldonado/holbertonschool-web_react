import React, { Component } from "react";
import { AppContext } from "../Context/context";
import { getLatestNotification } from "../utils/utils";
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
      notifications: [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
        { id: 3, type: "urgent", html: getLatestNotification() },
      ],
      courses: [
        { id: 1, name: "ES6", credit: 60 },
        { id: 2, name: "Webpack", credit: 20 },
        { id: 3, name: "React", credit: 40 },
      ],
    };
    // ... other bindings
  }

  markNotificationAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
    this.setState((prevState) => ({
      notifications: prevState.notifications.filter(
        (notification) => notification.id !== id
      ),
    }));
  };

  // ... other methods

  render() {
    const { user, logOut, displayDrawer, notifications, courses } = this.state;

    return (
      <AppContext.Provider value={{ user, logOut }}>
        <Notifications
          displayDrawer={displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
          listNotifications={notifications}
          markNotificationAsRead={this.markNotificationAsRead}
        />
        <div className="App">
          <Header />
          <main className="App-body">
            {user.isLoggedIn ? (
              <CourseList listCourses={courses} />
            ) : (
              <Login logIn={this.logIn} />
            )}
          </main>
          <Footer />
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;
