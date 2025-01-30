import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import { AppContext } from '../Context/context';

describe('<App />', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.exists()).toBe(true);
    });

    it('contains the Notifications component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('Notifications').exists()).toBe(true);
    });

    it('contains the Header component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('Header').exists()).toBe(true);
    });

    it('contains the Login component when not logged in', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('Login').exists()).toBe(true);
        expect(wrapper.find('CourseList').exists()).toBe(false);
    });

    it('contains the CourseList component when logged in', () => {
        const contextValue = {
            user: {
                email: 'test@example.com',
                password: 'password123',
                isLoggedIn: true,
            },
            logOut: jest.fn(),
        };

        const wrapper = mount(
            <AppContext.Provider value={contextValue}>
                <App />
            </AppContext.Provider>
        );

        expect(wrapper.find('CourseList').exists()).toBe(true);
        expect(wrapper.find('Login').exists()).toBe(false);
    });

    it('calls logOut function when logout link is clicked', () => {
        const logOutSpy = jest.fn();
        const contextValue = {
            user: {
                email: 'test@example.com',
                password: 'password123',
                isLoggedIn: true,
            },
            logOut: logOutSpy,
        };

        const wrapper = mount(
            <AppContext.Provider value={contextValue}>
                <App />
            </AppContext.Provider>
        );

        wrapper.find('Header').find('span').simulate('click');
        expect(logOutSpy).toHaveBeenCalled();
    });
});