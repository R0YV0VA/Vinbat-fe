import ACTIONS from "../constants";

const initialState = {
    login: '',
    password: ''
}

export default function ResetPasswordReducer (state = initialState, action) {
    switch (action.type) {
        case ACTIONS.RESET_PASSWORD:
            return {
                ...state,
                login: action.payload.login,
                password: action.payload.password
            }
        default:
            return state;
    }
}