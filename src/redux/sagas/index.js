import { all } from "redux-saga/effects";
import loginWatcher from "./LoginSaga";

export default function* rootWatcher() {
    yield all([
        loginWatcher()
    ])
}