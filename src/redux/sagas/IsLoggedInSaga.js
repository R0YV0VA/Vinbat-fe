import { put, takeEvery, call } from 'redux-saga/effects';
import ACTIONS from '../constants';
import { isLoggedIn } from '../actions';
import axios from 'axios';
import Cookies from 'universal-cookie'

const cookies = new Cookies();
const ServerApi = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });

const isLoggedInRequest = () => {
    return new Promise((resolve, reject) => {
        ServerApi.get('users/is-logged', {
            headers: { 
                Authorization: `Bearer ${cookies.get('token')}`,
            }
        })
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                resolve(error);
            })
    })
}

function* isLoggedInWorker() {
    const response = yield call(isLoggedInRequest);
    if (response.status === 200) {
        yield put(isLoggedIn(true));
    } else {
        yield put(isLoggedIn(false));
    }
}

export default function* isLoggedInWatcher() {
    yield takeEvery(ACTIONS.IS_LOGGED_IN_ASYNC, isLoggedInWorker);
}