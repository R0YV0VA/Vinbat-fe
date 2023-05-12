import { all } from "redux-saga/effects";
import loginWatcher from "./LoginSaga";
import registerWatcher from "./RegisterSaga";
import caseWatcher from "./CaseSaga";
import alertWatcher from "./AlertSaga";
import myAccountWatcher from "./MyAccountSaga";
import loginNameWatcher from "./LoginNameSaga";
import changePasswordWatcher from "./ChangePasswordSaga";
import resetPasswordWatcher from "./ResetPasswordSaga";
import cataloguePagesWatcher from "./CataloguePagesSaga";

export default function* rootWatcher() {
    yield all([
        loginWatcher(),
        registerWatcher(),
        caseWatcher(),
        alertWatcher(),
        myAccountWatcher(),
        loginNameWatcher(),
        changePasswordWatcher(),
        resetPasswordWatcher(),
        cataloguePagesWatcher()
    ])
}