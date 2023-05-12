import ACTIONS from "../constants";

const initialState = {
    batteriesPages: 0,
    tiresPages: 0,
    fullPages: 0,
}

export default function CataloguePagesReducer (state = initialState, action) {
    switch (action.type) {
        case ACTIONS.SET_CATALOG_PAGES:
            return {
                ...state,
                batteriesPages: action.payload.batteriesPages,
                tiresPages: action.payload.tiresPages,
                fullPages: action.payload.fullPages,
            }
        default:
            return state;
    }
}