import { ARTICLES_SUCCESS, ARTICLES_FALIURE } from './types';

export default (state = {}, action) => {
  const { data, error } = action;
  switch (action.type) {
    case ARTICLES_FALIURE:
      return {
        ...state,
        error,
      };
    case ARTICLES_SUCCESS:
      return {
        ...state,
        ...data,
      };
    default:
      return state;
  }
};
