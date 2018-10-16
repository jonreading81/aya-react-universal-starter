import { NAVIGATION_TOGGLE } from './types';

export default (state = { isOpen: false }, action = { type: '' }) => {
  switch (action.type) {
    case NAVIGATION_TOGGLE:
      return {
        ...state,
        isOpen: !state.isOpen,
      };

    default:
      return state;
  }
};
