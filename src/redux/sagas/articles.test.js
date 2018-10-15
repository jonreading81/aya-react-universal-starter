import {
  requestArticle,
  watchRequestArticle
} from './articles';

import {
  success as successAction,
  failure as errorAction,
} from '../actions/articles';

import { put, takeEvery } from 'redux-saga/effects';
import { ARTICLES_REQUEST } from '../types/articles';

describe('watchRequestArticle saga', () => {
  it('should take every ARTICLE_REQUEST action', () => {
    const gen = watchRequestArticle();
    expect(gen.next().value)
      .toEqual(takeEvery(ARTICLES_REQUEST, requestArticle));
  });
});

describe('requestArticle', () => {
  let iterator;
  const action = {
    id: 1,
    meta: 'test',
  };
  const expectedData = {
    name: 'Danny kins',
    id: action.id
  };
  const error = {};
  const expectedSuccessAction = successAction(expectedData, action.meta);
  const expectedErrorAction = errorAction(error, action.meta);
  iterator = requestArticle(action);

  it('should delay 1000ms then call success action', () => {
    iterator.next();
    expect(iterator.next().value).toEqual(put(expectedSuccessAction));
  });

  it('handle error', () => {
    expect(iterator.throw(error).value).toEqual(put(expectedErrorAction));
  });
});
