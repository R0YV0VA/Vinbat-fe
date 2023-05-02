import { put, takeEvery, call } from 'redux-saga/effects';
import ACTIONS from '../constants';
import { setLoginName, loading, alert, isPopUpActive } from '../actions';
import axios from 'axios';
import { getAccessToken, setAccessToken } from '../../utils/accessToken';

const ServerApi = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: { Authorization: `Bearer ${getAccessToken()}` }
  });

const loginNameRequest = (credentials) => {
    return new Promise((resolve, reject) => {
        ServerApi.put('users/change-login-name', {
            name: credentials.name,
            login: credentials.login
        })
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                resolve(error);
            })
    })
}

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