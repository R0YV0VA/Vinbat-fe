import { put, takeEvery, call } from 'redux-saga/effects';
import ACTIONS from '../constants';
import { resetPassword, loading, alert } from '../actions';
import axios from 'axios';
import routes from '../../routes';

const ServerApi = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });

const resetPasswordRequest = (credentials) => {
    return new Promise((resolve, reject) => {
        ServerApi.put('auth/newpass', {
            login: credentials.login,
            password: credentials.password
        })
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                resolve(error);
            })
    })
}

function* resetPasswordWorker(cred) {
    const payload = {
        login: cred.payload.login,
        password: cred.payload.password
    }
    yield put(loading(true));
    const state = yield resetPassword(payload);
    const credentials = state.payload;
    const response = yield call(resetPasswordRequest, credentials);
    if (response.status === 200) {
        yield put(loading(false));
        var props = {
            message: 'Лист з підтвердженням зміни пароля відправлено на вашу пошту',
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
        window.location.href = routes.LOGIN;
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

export default function* resetPasswordWatcher() {
    yield takeEvery(ACTIONS.RESET_PASSWORD_ASYNC, resetPasswordWorker);
}