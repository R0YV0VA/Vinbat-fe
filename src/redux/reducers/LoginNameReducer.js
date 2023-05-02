import ACTIONS from "../constants";

const initialState = {
    name: '',
    login: ''
}

export default function LoginNameReducer (state = initialState, action) {
    switch (action.type) {
        case ACTIONS.SET_LOGIN_NAME:
            return {
                ...state,
                name: action.payload.name,
                login: action.payload.login
            }
        default:
            return state;
    }
}