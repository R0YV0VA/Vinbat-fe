import { put, takeEvery, call } from 'redux-saga/effects';
import ACTIONS from '../constants';
import { register, loading, alert } from '../actions';
import { registerRequest } from '../../api';
import routes from '../../routes';

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
    console.log(response);
    if (response.status === 200) {
        yield put(loading(false));
        var props = {
            message: 'Лист з підтвердженням реєстрації відправлено на вашу пошту',
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
    } else if (response.request.status === 409) {
        yield put(loading(false));
        var props = {
            message: 'Користувач з таким логіном вже існує!',
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
        var props = {
            message: 'Упс, щось пішло не так...',
            type: 'danger',
            isAlert: true
        }
        yield put(loading(false));
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

export default function* registerWatcher() {
    yield takeEvery(ACTIONS.REGISTER_ASYNC, registerWorker);
}