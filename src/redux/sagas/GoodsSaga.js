import { put, takeEvery, call } from 'redux-saga/effects';
import ACTIONS from '../constants';
import { setCatalogGoods, loading, alert } from '../actions';
import { goodsRequest } from '../../api';

function* goodsWorker(props) {
    yield put(loading(true));
    const response = yield call(goodsRequest, props.payload);
    if (response.status === 200) {
        yield put(setCatalogGoods(response.data));
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

export default function* goodsWatcher() {
    yield takeEvery(ACTIONS.SET_CATALOG_GOODS_ASYNC, goodsWorker);
}