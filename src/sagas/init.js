import { take, fork, select } from 'redux-saga/effects';
import { REHYDRATE } from 'redux-persist/lib/constants';
import { getUser } from './selectors';
import Utils from '../Utils';

function* watchReduxLoadFromDisk() {
  while (true) {
    yield take(REHYDRATE);
    try {
      const { data } = yield select(getUser);

      if (data.userLoggedIn) {
        Utils.setUserLoggedIn(true);
      }
    } catch (err) {
      console.warn('saga watchReduxLoadFromDisk error: ', err);
    }
  }
}

export default function* root() {
  yield fork(watchReduxLoadFromDisk);
}
