import { createStore, combineReducers, applyMiddleware } from 'redux';
import LoginReducer from './reducers/LoginReducer';
import RegisterReducer from './reducers/RegisterReducer';
import LoadingReducer from './reducers/LoadingReducer';
import createSagaMiddleware from 'redux-saga';
import rootWatcher from './sagas';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    login: LoginReducer,
    register: RegisterReducer,
    loading: LoadingReducer,
});

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootWatcher);

export default store;