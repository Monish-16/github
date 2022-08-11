import types from "../Actions/actionTypes";


const INITIAL_STATE = {
    purchases: [],
    loading: false,
    error: null,
};


const getpurchaseReducer = (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case types.GET_PURCHASE_START:
        case types.CREATE_PURCHASE_START:
        case types.UPDATE_PURCHASE_START:
        case types.DELETE_EVENT_START:
            return {
                ...state,
                loading: true,
            }
        case types.GET_PURCHASE_SUCCESS:
            return {
                ...state,
                loading: false,
                purchases: action.payload,
            };
        case types.CREATE_PURCHASE_SUCCESS:
        case types.UPDATE_PURCHASE_SUCCESS:
        case types.DELETE_PURCHASE_SUCCESS:
            return {
                ...state,
                loading: false
            }
        case types.GET_PURCHASE_FAILURE:
        case types.CREATE_PURCHASE_FAILURE:
        case types.UPDATE_PURCHASE_FAILURE:
        case types.DELETE_PURCHASE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            }
        default:
            return state;
    }
};

export default getpurchaseReducer;