import { put, takeEvery, call } from 'redux-saga/effects';
import ACTIONS from '../constants';
import { setMyAccount, loading, alert } from '../actions';
import { myAccountRequest } from '../../api';

function* myAccountWorker() {
    yield put(loading(true));
    const response = yield call(myAccountRequest);
    if (response.status === 200) {
        yield put(setMyAccount(response.data));
        yield put(loading(false));
    } else {
        yield put(loading(false));
        var props = {
            message: 'Упс, щось пішло не так...',
            type: 'danger',
            isAlert: true
        }
        yield put(alert(props));
        yield new Promise(resolve => setTimeout(resolve, 3000));
        props = {
            message: '',
            type: '',
            isAlert: false
        }
        yield put(alert(props));
    }
}

export default function* myAccountWatcher() {
    yield takeEvery(ACTIONS.SET_MY_ACCOUNT_ASYNC, myAccountWorker);
}