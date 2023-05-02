const ACTIONS = Object.freeze({
    LOGIN: 'LOGIN',
    LOGIN_ASYNC: 'LOGIN_ASYNC',
    REGISTER: 'REGISTER',
    REGISTER_ASYNC: 'REGISTER_ASYNC',
    IS_LOADING: 'IS_LOADING',
    ALERT: 'ALERT',
    ALERT_ASYNC: 'ALERT_ASYNC',
    CASE: 'CASE',
    CASE_ASYNC: 'CASE_ASYNC',
    SET_MY_ACCOUNT: 'MY_ACCOUNT',
    SET_MY_ACCOUNT_ASYNC: 'MY_ACCOUNT_ASYNC',
    IS_LOGGED_IN: 'IS_LOGGED_IN',
    IS_LOGGED_IN_ASYNC: 'IS_LOGGED_IN_ASYNC',
});

export const ACCESS_TOKEN = 'accessToken'
export const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'

export default ACTIONS;