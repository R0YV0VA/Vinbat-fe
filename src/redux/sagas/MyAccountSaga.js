import { put, takeEvery, call } from 'redux-saga/effects';
import ACTIONS from '../constants';
import { setMyAccount, loading, alert } from '../actions';
import axios from 'axios';
import { getAccessToken } from '../../utils/accessToken';

const ServerApi = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });

const myAccountRequest = () => {
    return new Promise((resolve, reject) => {
        ServerApi.get('users/my-account', {
            headers: { Authorization: `Bearer ${getAccessToken()}` }
        })
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                resolve(error);
            })
    })
}

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