import { put, takeEvery } from 'redux-saga/effects';
import { ARTICLES_REQUEST } from '../types/articles';
import {
  success as successAction,
  failure as errorAction,
} from '../actions/articles';

const delay = ms => new Promise(res => setTimeout(res, ms));

function* requestArticle(action) {
  const { meta, id } = action;
  try {
    const data = {
      name: 'Danny kins',
      id,
    };
    yield delay(1000);
    yield put(successAction(data, meta));
  } catch (error) {
    yield put(errorAction(error, meta));
  }
}

function* watchRequestArticle() {
  yield takeEvery(ARTICLES_REQUEST, requestArticle);
}

export default watchRequestArticle;
