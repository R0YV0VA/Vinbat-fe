import { put, takeEvery, call } from 'redux-saga/effects';
import ACTIONS from '../constants';
import { setLoginName, loading, alert, isPopUpActive } from '../actions';
import { loginNameRequest } from '../../api';
import {  setAccessToken } from '../../utils/accessToken';

const setCookie = (token) => {
    return new Promise((resolve, reject) => {
        setAccessToken(token);
        resolve();
    })
}

function* loginNameWorker(cred) {
    const payload = {
        name: cred.payload.name,
        login: cred.payload.login
    }
    yield put(loading(true));
    const state = yield setLoginName(payload);
    const credentials = state.payload;
    const response = yield call(loginNameRequest, credentials);
    if (response.status === 200) {
        yield put(isPopUpActive(false));
        yield put(loading(false));
        var props = {
            message: 'Успішно!',
            type: 'success',
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
        window.location.reload();
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

export default function* loginNameWatcher() {
    yield takeEvery(ACTIONS.SET_LOGIN_NAME_ASYNC, loginNameWorker);
}