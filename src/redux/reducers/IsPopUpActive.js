import ACTIONS from "../constants";

const initialState = {
    isActive: false,
    type: ''
}

export default function IsPopUpActive (state = initialState, action) {
    switch (action.type) {
        case ACTIONS.IS_POP_UP_ACTIVE:
            return {
                ...state,
                isActive: action.payload.isActive,
                type: action.payload.type
            }
        default:
            return state;
    }
}