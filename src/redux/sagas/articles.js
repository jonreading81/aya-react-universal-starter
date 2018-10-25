import { put, takeEvery, call } from 'redux-saga/effects';
import { ARTICLES_REQUEST } from '../modules/articles/types';
import {
  success as successAction,
  failure as errorAction,
} from '../modules/articles/actions';

import apiClient from '../../services/apiClient';

function* requestArticle(action) {
  const { meta, id } = action;
  try {
    const data = yield call(apiClient, { url: `wp-json/pagesd?slug=${id}` });
    yield put(successAction(data, meta));
  } catch (error) {
    yield put(errorAction(error, meta));
  }
}

function* watchRequestArticle() {
  yield takeEvery(ARTICLES_REQUEST, requestArticle);
}

export {
  requestArticle,
  watchRequestArticle,
};
