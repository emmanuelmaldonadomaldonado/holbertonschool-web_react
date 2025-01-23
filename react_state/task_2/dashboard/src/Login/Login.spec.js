// ... previous imports and tests

it('calls logIn function with email and password upon form submission', () => {
    const logInMock = jest.fn();
    const wrapper = shallow(<Login logIn={logInMock} />);
    wrapper.setState({
        email: 'test@example.com',
        password: 'password123',
        enableSubmit: true,
    });
    wrapper.find('form').simulate('submit', { preventDefault: () => { } });
    expect(logInMock).toHaveBeenCalledWith('test@example.com', 'password123');
});

// ... other tests