import { put, takeEvery, call } from 'redux-saga/effects';
import ACTIONS from '../constants';
import { setCatalogPages, loading, alert } from '../actions';
import { catalogPagesRequest } from '../../api';

function* cataloguePagesWorker() {
    yield put(loading(true));
    const response = yield call(catalogPagesRequest);
    if (response.status === 200) {
        yield put(setCatalogPages(response.data));
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

export default function* cataloguePagesWatcher() {
    yield takeEvery(ACTIONS.SET_CATALOG_PAGES_ASYNC, cataloguePagesWorker);
}