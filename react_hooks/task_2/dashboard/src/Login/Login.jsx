// ... previous imports and code

handleLoginSubmit = (event) => {
  event.preventDefault();
  this.props.logIn(this.state.email, this.state.password);
};

// ... rest of the component remains the same
