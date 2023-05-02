import ACTIONS from "../constants";

const initialState = {
    oldpassword: '',
    newpassword: '',
}

export default function ChangePasswordReducer (state = initialState, action) {
    switch (action.type) {
        case ACTIONS.SET_PASSWORD:
            return {
                ...state,
                oldpassword: action.payload.oldpassword,
                newpassword: action.payload.newpassword
            }
        default:
            return state;
    }
}