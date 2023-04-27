import ACTIONS from "../constants";

const initialState = {
    name: '',
    connection: '',
    message: '',
}

export default function CaseReducer (state = initialState, action) {
    switch (action.type) {
        case ACTIONS.CASE:
            return {
                ...state,
                name: action.payload.name,
                connection: action.payload.connection,
                message: action.payload.message,
            }
        default:
            return state;
    }
}