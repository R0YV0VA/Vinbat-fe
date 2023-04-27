import { put, takeEvery, call } from 'redux-saga/effects';
import ACTIONS from '../constants';
import { addcase, loading, alert } from '../actions';
import axios from 'axios';

const ServerApi = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });

const caseRequest = (props) => {
    return new Promise((resolve, reject) => {
        console.log(props);
        ServerApi.post('cases', {
            Username: props.username,
            Connection: props.connection,
            Message: props.message
        })
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                resolve(error);
            })
    })
}

function* caseWorker(prop) {
    const payload = {
        username: prop.payload.username,
        connection: prop.payload.connection,
        message: prop.payload.message
    }
    yield put(loading(true));
    const state = yield addcase(payload);
    const caseprops = state.payload;
    const response = yield call(caseRequest, caseprops);
    if (response.status === 200) {
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

export default function* caseWatcher() {
    yield takeEvery(ACTIONS.CASE_ASYNC, caseWorker);
}