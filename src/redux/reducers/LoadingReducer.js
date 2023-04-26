import ACTIONS from "../constants";

const initialState = {
    isLoading: false
}

export default function LoadingReducer (state = initialState, action) {
    switch (action.type) {
        case ACTIONS.IS_LOADING:
            return {
                ...state,
                isLoading: action.payload.isLoading
            }
        default:
            return state;
    }
}