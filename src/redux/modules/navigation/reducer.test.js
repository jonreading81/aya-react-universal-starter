import reducer from './reducer';
import { toggleNavigation } from './actions';

describe('Navigation Reducer', () => {
  it('should default  isOpen to false', () => {
    expect(reducer().isOpen).toBeFalsy();
  });

  it('should toggle navigation isOpen state', () => {
    const state = reducer({ isOpen: false }, toggleNavigation());
    expect(state.isOpen).toBeTruthy();
  });
});
