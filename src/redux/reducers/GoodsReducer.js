import ACTIONS from "../constants";

//array of objects
const initialState = {
    products: []
}

export default function GoodsReducer (state = initialState, action) {
    switch (action.type) {
        case ACTIONS.SET_CATALOG_GOODS:
            return {
                ...state,
                products: action.payload
            }
        default:
            return state;
    }
}