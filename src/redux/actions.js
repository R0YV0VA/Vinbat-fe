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