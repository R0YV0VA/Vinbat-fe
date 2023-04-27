import { put, takeEvery, call } from 'redux-saga/effects';
import ACTIONS from '../constants';
import { alert } from '../actions';

function* alertWorker(prop) {
    var props = {
        message: prop.payload.message,
        type: prop.payload.type,
        isAlert: prop.payload.isAlert
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

export default function* alertWatcher() {
    yield takeEvery(ACTIONS.ALERT_ASYNC, alertWorker);
}