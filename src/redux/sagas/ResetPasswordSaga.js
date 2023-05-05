import { put, takeEvery, call } from 'redux-saga/effects';
import ACTIONS from '../constants';
import { resetPassword, loading, alert } from '../actions';
import { resetPasswordRequest } from '../../api';
import routes from '../../routes';

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