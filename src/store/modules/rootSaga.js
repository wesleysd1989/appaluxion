import { all } from 'redux-saga/effects';

import gallery from './gallery/sagas';

export default function* rootSaga() {
  return yield all([gallery]);
}
