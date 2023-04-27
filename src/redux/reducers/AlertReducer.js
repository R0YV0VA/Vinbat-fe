import ACTIONS from "../constants";

const initialState = {
    message: '',
    type: '',
    isAlert: false
}

export default function AlertReducer (state = initialState, action) {
    switch (action.type) {
        case ACTIONS.ALERT:
            return {
                ...state,
                message: action.payload.message,
                type: action.payload.type,
                isAlert: action.payload.isAlert
            }
        default:
            return state;
    }
}