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

const success = (data, meta) => (
  {
    type: ARTICLES_SUCCESS,
    data,
    meta,
  }
);

const failure = (error, meta) => (
  {
    type: ARTICLES_FALIURE,
    error,
    meta,
  }
);

export {
  request,
  success,
  failure,
};
