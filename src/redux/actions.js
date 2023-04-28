import ACTIONS from "./constants";

export const login = (credentials) => {
    return {
        type: ACTIONS.LOGIN,
        payload: {
            login: credentials.login,
            password: credentials.password
        }
    }
}

export const loginAsync = (credentials) => {
    return {
        type: ACTIONS.LOGIN_ASYNC,
        payload: {
            login: credentials.login,
            password: credentials.password
        }
    }
}

export const register = (credentials) => {
    return {
        type: ACTIONS.REGISTER,
        payload: {
            name: credentials.name,
            login: credentials.login,
            password: credentials.password,
        }
    }
}

export const registerAsync = (credentials) => {
    return {
        type: ACTIONS.REGISTER_ASYNC,
        payload: {
            name: credentials.name,
            login: credentials.login,
            password: credentials.password,
        }
    }
}

export const loading = (isLoading) => {
    return {
        type: ACTIONS.IS_LOADING,
        payload: {
            isLoading
        }
    }
}

export const alert = (props) => {
    return {
        type: ACTIONS.ALERT,
        payload: {
            message: props.message,
            type: props.type,
            isAlert: props.isAlert
        }
    }
}

export const alertAsync = (props) => {
    return {
        type: ACTIONS.ALERT_ASYNC,
        payload: {
            message: props.message,
            type: props.type,
            isAlert: props.isAlert
        }
    }
}

export const addcase = (props) => {
    return {
        type: ACTIONS.CASE,
        payload: {
            username: props.username,
            connection: props.connection,
            message: props.message,
        }
    }
}

export const addcaseAsync = (props) => {
    return {
        type: ACTIONS.CASE_ASYNC,
        payload: {
            username: props.username,
            connection: props.connection,
            message: props.message,
        }
    }
}

export const setMyAccount = (props) => {
    return {
        type: ACTIONS.SET_MY_ACCOUNT,
        payload: {
            name: props.name,
            login: props.login,
            purchasesAmount: props.purchasesAmount,
            discount: props.discount,
            status: props.status,
        }
    }
}

export const setMyAccountAsync = () => {
    return {
        type: ACTIONS.SET_MY_ACCOUNT_ASYNC
    }
}