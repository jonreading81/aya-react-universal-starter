import { put, takeEvery } from 'redux-saga/effects';
import { ARTICLES_REQUEST } from '../types/articles';

import {
  success as successAction,
  failure as errorAction,
} from '../actions/articles';

function* requestArticle() {
  try {
    const data = {
      name: 'Danny kins',
    };
    yield put(successAction(data));
  } catch (error) {
    yield put(errorAction(error));
  }
}

function* watchRequestArticle() {
  yield takeEvery(ARTICLES_REQUEST, requestArticle);
}

export default watchRequestArticle;
