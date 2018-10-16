import React from 'react';
import { shallow, mount} from 'enzyme';
import NavBar from './NavBar';
import { BrowserRouter as Router } from 'react-router-dom';

describe('NavBar', () => {
  it('should have a class on the contianer nav-bar', () => {
    const wrapper = shallow(<NavBar />);
    expect(wrapper.hasClass('navBar')).toBeTruthy();
  });

  it('should create NavLink for items', () => {
    const items = [
      {title: 'Title 1', url: 'url-1'},
      {title: 'Title 1', url: 'url-1'},
    ];
    const wrapper = shallow(<NavBar items={items} />);
    expect(wrapper.find('NavLink')).toHaveLength(2);
  });

  it('should set url for items', () => {
    const items = [
      {title: 'Title 1', url: 'url-1'}
    ];
    const wrapper = shallow(<NavBar items={items} />);
    expect(wrapper.find('NavLink').first().prop('to')).toBe('url-1');
  });

  it('should set text for items', () => {
    const items = [
      {title: 'Title 1', url: 'url-1'}
    ];
    const wrapper = mount(
      <Router>
        <NavBar items={items} />
      </Router>
    );
    expect(wrapper.find('NavLink').first().text()).toBe('Title 1');
  });

  it('should add isSelected class for item matching url', () => {
    const items = [
      {title: 'Title 1', url: 'url-1'},
      {title: 'Title 2', url: 'url-2'}
    ];
    const wrapper = shallow(<NavBar items={items} url='url-1' />);
    const links = wrapper.find('NavLink');
    expect(links.first().hasClass('isSelected')).toBeTruthy();
    expect(links.last().hasClass('isSelected')).toBeFalsy();
  });

  it('should add isOpen class if isOpen property set', () => {
    const wrapper = shallow(<NavBar isOpen />);
    expect(wrapper.hasClass('isOpen')).toBeTruthy();
  });

  it('should call onChange handler when item is clicked', () => {
    const items = [
      {title: 'Title 1', url: 'url-1'}
    ];
    const onChange = jest.fn();
    const wrapper = shallow(<NavBar items={items} onChange={onChange} />);
    wrapper.find('NavLink').first().simulate('click');
    expect(onChange.mock.calls[0][0]).toBe('url-1');
  });
});
