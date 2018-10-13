import {
  ARTICLES_REQUEST,
  ARTICLES_SUCCESS,
  ARTICLES_FALIURE,
} from '../types/articles';

const request = id => (
  {
    type: ARTICLES_REQUEST,
    id,
    meta: {
      thunk: true,
    },
  }
);

const success = data => (
  {
    type: ARTICLES_SUCCESS,
    data,
    meta: {
      thunk: true,
    },
  }
);

const failure = error => (
  {
    type: ARTICLES_FALIURE,
    error,
    meta: {
      thunk: true,
    },
  }
);

export {
  request,
  success,
  failure,
};
