import { ARTICLES_SUCCESS } from '../types/articles';

export default (state = {}, action) => {
  const { data } = action;

  switch (action.type) {
    case ARTICLES_SUCCESS:
      return {
        ...state,
        ...data,
      };
    default:
      return state;
  }
};
