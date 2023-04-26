import ACTIONS from "../constants";

const initialState = {
    login: '',
    password: ''
}

export default function LoginReducer (state = initialState, action) {
    switch (action.type) {
        case ACTIONS.LOGIN:
            return {
                ...state,
                login: action.payload.login,
                password: action.payload.password
            }
        default:
            return state;
    }
}