import React from 'react';
import { shallow } from 'enzyme';
import App from './App'; 

test('App component contains the Notifications component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('Notifications')).toHaveLength(1);
});

test('App component contains the Header component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('Header')).toHaveLength(1);
});

test('App component contains the Login component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('Login')).toHaveLength(1);
});

test('App component contains the Footer component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('Footer')).toHaveLength(1);
});
