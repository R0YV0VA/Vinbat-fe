import { all } from "redux-saga/effects";
import loginWatcher from "./LoginSaga";
import registerWatcher from "./RegisterSaga";

export default function* rootWatcher() {
    yield all([
        loginWatcher(),
        registerWatcher()
    ])
}