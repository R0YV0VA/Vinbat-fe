import ACTIONS from "../constants";

const initialState = {
    isLogged: false,
}

export default function IsLoggedInReducer (state = initialState, action) {
    switch (action.type) {
        case ACTIONS.IS_LOGGED_IN:
            return {
                ...state,
                isLogged: action.payload.isLogged
            }
        default:
            return state;
    }
}