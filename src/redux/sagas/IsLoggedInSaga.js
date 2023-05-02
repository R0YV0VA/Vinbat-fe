import { put, takeEvery, call } from 'redux-saga/effects';
import ACTIONS from '../constants';
import { isLoggedIn } from '../actions';
import { getIsLogined } from '../../api';

function* isLoggedInWorker() {
    const response = yield call(getIsLogined)
    if (response.status === 200) {
        yield put(isLoggedIn(true));
    } else {
        yield put(isLoggedIn(false));
    }
}

export default function* isLoggedInWatcher() {
    yield takeEvery(ACTIONS.IS_LOGGED_IN_ASYNC, isLoggedInWorker);
}