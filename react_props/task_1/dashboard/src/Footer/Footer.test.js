import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer'; 
test('Footer component renders without crashing', () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper).toMatchSnapshot();
});

test('Footer component renders the text "Copyright"', () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper.text()).toContain('Copyright');
});
