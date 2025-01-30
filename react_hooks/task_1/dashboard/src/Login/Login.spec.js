import React from 'react';
import { shallow } from 'enzyme';
import Login from '../../../../task_0/dashboard/src/Login/Login';

describe('<Login />', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.exists()).toBe(true);
    });

    it('submit button is disabled by default', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(true);
    });

    it('submit button is enabled when email and password meet criteria', () => {
        const wrapper = shallow(<Login />);
        wrapper.find('input[type="email"]').simulate('change', { target: { value: 'test@example.com' } });
        wrapper.find('input[type="password"]').simulate('change', { target: { value: 'password123' } });
        expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(false);
    });

    // ... other existing tests
});