import { put, takeEvery, call } from 'redux-saga/effects';
import ACTIONS from '../constants';
import { login, loading, alert } from '../actions';
import { loginRequest } from '../../api';
import routes from '../../routes';
import { setAccessToken } from '../../utils/accessToken';

const setCookie = (token) => {
    return new Promise((resolve, reject) => {
        setAccessToken(token);
        resolve();
    })
}

function* loginWorker(cred) {
    const payload = {
        login: cred.payload.login,
        password: cred.payload.password
    }
    yield put(loading(true));
    const state = yield login(payload);
    const credentials = state.payload;
    const response = yield call(loginRequest, credentials);
    if (response.status === 200) {
        yield call(setCookie, response.data);
        yield put(loading(false));
        window.location.href = routes.HOME;
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

export default function* loginWatcher() {
    yield takeEvery(ACTIONS.LOGIN_ASYNC, loginWorker);
}