import { put, takeEvery, call } from 'redux-saga/effects';
import ACTIONS from '../constants';
import { changePassword, loading, alert, isPopUpActive } from '../actions';
import axios from 'axios';
import { getAccessToken, setAccessToken } from '../../utils/accessToken';

const ServerApi = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: { Authorization: `Bearer ${getAccessToken()}` }
  });

const changePasswordRequest = (credentials) => {
    return new Promise((resolve, reject) => {
        ServerApi.put('users/change-password' ,{
            oldpassword: credentials.oldpassword,
            newpassword: credentials.newpassword
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

function* changePasswordWorker(cred) {
    const payload = {
        oldpassword: cred.payload.oldpassword,
        newpassword: cred.payload.newpassword
    }
    console.log(payload);
    yield put(loading(true));
    const state = yield changePassword(payload);
    const credentials = state.payload;
    const response = yield call(changePasswordRequest, credentials);
    if (response.status === 200) {
        yield put(isPopUpActive(false));
        yield call(setCookie, response.data);
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
    } else if (response.request.status === 404) {
        yield put(loading(false));
        var props = {
            message: 'Користувача не знайдено!',
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
    } else if (response.request.status === 400) {
        yield put(loading(false));
        var props = {
            message: 'Невірний пароль!',
            type: 'warning',
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
            message: 'Щось пішло не так!',
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

export default function* changePasswordWatcher() {
    yield takeEvery(ACTIONS.SET_PASSWORD_ASYNC, changePasswordWorker);
}