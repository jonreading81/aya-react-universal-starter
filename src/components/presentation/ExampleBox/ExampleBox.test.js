import React from 'react';
import { shallow} from 'enzyme';
import ExampleBox from './ExampleBox';


describe('Example box', () => {
  it('should contain the correct text', () => {
    const wrapper = shallow(<ExampleBox />);
    expect(wrapper.text()).toBe('Example Box');
  });
});
