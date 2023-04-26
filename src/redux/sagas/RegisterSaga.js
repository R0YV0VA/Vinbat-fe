import { put, takeEvery, call } from 'redux-saga/effects';
import ACTIONS from '../constants';
import { register, loading } from '../actions';
import axios from 'axios';
import routes from '../../routes';

const ServerApi = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });

const registerRequest = (credentials) => {
    return new Promise((resolve, reject) => {
        ServerApi.post('auth/register', {
            name: credentials.name,
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

function* registerWorker(cred) {
    const payload = {
        name: cred.payload.name,
        login: cred.payload.login,
        password: cred.payload.password
    }
    yield put(loading(true));
    const state = yield register(payload);
    const credentials = state.payload;
    const response = yield call(registerRequest, credentials);
    if (response.status === 200) {
        yield put(loading(false));
        window.location.href = routes.LOGIN;
    } else {
        yield put(loading(false));
        alert(response.message);
    }
}

export default function* registerWatcher() {
    yield takeEvery(ACTIONS.REGISTER_ASYNC, registerWorker);
}