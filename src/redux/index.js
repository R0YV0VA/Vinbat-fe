import { createStore, combineReducers, applyMiddleware } from 'redux';
import LoginReducer from './reducers/LoginReducer';
import RegisterReducer from './reducers/RegisterReducer';
import LoadingReducer from './reducers/LoadingReducer';
import AlertReducer from './reducers/AlertReducer';
import CaseReducer from './reducers/CaseReducer';
import MyAccountReducer from './reducers/MyAccountReducer';
import IsPopUpActive from './reducers/IsPopUpActive';
import LoginNameReducer from './reducers/LoginNameReducer';
import ChangePasswordReducer from './reducers/ChangePasswordReducer';

import createSagaMiddleware from 'redux-saga';
import rootWatcher from './sagas';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    login: LoginReducer,
    register: RegisterReducer,
    loading: LoadingReducer,
    alert: AlertReducer,
    case: CaseReducer,
    myAccount: MyAccountReducer,
    isPopUpActive: IsPopUpActive,
    loginName: LoginNameReducer,
    changePassword: ChangePasswordReducer,
});

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootWatcher);

export default store;