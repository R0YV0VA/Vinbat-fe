import { put, takeEvery, call } from 'redux-saga/effects';
import ACTIONS from '../constants';
import { login, loading } from '../actions';
import axios from 'axios';
import Cookies from 'universal-cookie'
import routes from '../../routes';

const cookies = new Cookies();
const ServerApi = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });

const loginRequest = (credentials) => {
    return new Promise((resolve, reject) => {
        ServerApi.post('auth/login', {
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

const setCookie = (token) => {
    return new Promise((resolve, reject) => {
        cookies.set('token', token, { path: '/' });
        resolve();
    })
}

function* loginWorker(cred) {
    const payload = {
        login: cred.payload.login,
        password: cred.payload.password
    }
    console.log(payload);
    yield put(loading(true));
    const state = yield login(payload);
    const credentials = state.payload;
    const response = yield call(loginRequest, credentials);
    if (response.status === 200) {
        yield call(setCookie, response.data);
        yield put(loading(false));
        window.location.href = routes.HOME;
    } else {
        yield put(loading(false));
        alert(response.message);
    }
}

export default function* loginWatcher() {
    yield takeEvery(ACTIONS.LOGIN_ASYNC, loginWorker);
}