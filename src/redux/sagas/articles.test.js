import { put, takeEvery, call } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { throwError } from 'redux-saga-test-plan/providers';

import {
  requestArticle,
  watchRequestArticle
} from './articles';

import {
  success as successAction,
  failure as errorAction,
} from '../modules/articles/actions';

import { ARTICLES_REQUEST } from '../modules/articles/types';
import apiClient from '../../services/apiClient';


describe('watchRequestArticle saga', () => {
  it('should take every ARTICLE_REQUEST action', () => {
    const gen = watchRequestArticle();
    expect(gen.next().value)
      .toEqual(takeEvery(ARTICLES_REQUEST, requestArticle));
  });
});

describe('requestArticle', () => {
  const action = {
    id: 1,
    meta: 'test',
  };
  const articleData = {
    name: 'Danny kins',
    id: action.id
  };
  const error = {};

  it('should request data from api call success action', () => {
    return expectSaga(requestArticle, action)
      .provide([
        [call(apiClient, {url: 'wp-json/pages?slug=1'}), articleData],
      ])
      .put(successAction(articleData, action.meta))
    .run();
  });

  it('should handle api  error', () => {
    return expectSaga(requestArticle, action)
      .provide([
        [call(apiClient, {url: 'wp-json/pages?slug=1'}), throwError(error)],
      ])
      .put(errorAction(error, action.meta))
    .run();
  });
});
