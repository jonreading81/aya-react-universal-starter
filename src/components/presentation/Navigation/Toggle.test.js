import React from 'react';
import { shallow} from 'enzyme';
import Toggle from './Toggle';

describe('Nav Toggle', () => {
  it('should use toggle className', () => {
    const wrapper = shallow(<Toggle />);
    expect(wrapper.hasClass('toggle')).toBeTruthy();
  });

  it('should use className specified', () => {
    const wrapper = shallow(<Toggle className="test" />);
    expect(wrapper.hasClass('test')).toBeTruthy();
  });

  it('should use the text provided', () => {
    const text = 'test';
    const wrapper = shallow(<Toggle text={text} />);
    expect(wrapper.text()).toBe(text);

  });
  it('should call onToggle handler', () => {
    const onToggle = jest.fn();
    const wrapper = shallow(<Toggle onToggle={onToggle} />);
    wrapper.find('button').first().simulate('click');
    expect(onToggle.mock.calls).toHaveLength(1);
  });
});
