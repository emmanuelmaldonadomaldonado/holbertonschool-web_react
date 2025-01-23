import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from './Header';
import { AppContext } from '../Context/context';

describe('<Header />', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.exists()).toBe(true);
    });

    it('does not render logoutSection with default context', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('#logoutSection').exists()).toBe(false);
    });

    it('renders logoutSection with user defined', () => {
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
                <Header />
            </AppContext.Provider>
        );

        expect(wrapper.find('#logoutSection').exists()).toBe(true);
        expect(wrapper.find('#logoutSection').text()).toContain('Welcome test@example.com');
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
                <Header />
            </AppContext.Provider>
        );

        wrapper.find('span').simulate('click');
        expect(logOutSpy).toHaveBeenCalled();
    });
});