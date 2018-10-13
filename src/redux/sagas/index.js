import { all } from 'redux-saga/effects';
import watchRequestArticle from './articles';

export default function* rootSaga() {
  yield all([
    watchRequestArticle(),
  ]);
}
