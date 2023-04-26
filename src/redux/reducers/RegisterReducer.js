import ACTIONS from "../constants";

const initialState = {
    name: '',
    login: '',
    password: ''
}

export default function RegisterReducer (state = initialState, action) {
    switch (action.type) {
        case ACTIONS.REGISTER:
            return {
                ...state,
                name: action.payload.name,
                login: action.payload.login,
                password: action.payload.password
            }
        default:
            return state;
    }
}