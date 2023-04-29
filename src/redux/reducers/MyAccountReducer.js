import ACTIONS from "../constants";

const initialState = {
    name: '',
    login: '',
    purchasesAmount: 0,
    discount: 0,
    status: 1,
}

export default function MyAccountReducer (state = initialState, action) {
    switch (action.type) {
        case ACTIONS.SET_MY_ACCOUNT:
            return {
                ...state,
                name: action.payload.name,
                login: action.payload.login,
                purchasesAmount: action.payload.purchasesAmount,
                discount: action.payload.discount,
                status: action.payload.status,
            }
        default:
            return state;
    }
}