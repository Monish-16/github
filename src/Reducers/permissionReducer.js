import types from "../Actions/actionTypes";

const INITIAL_STATE = {
    permissions: [],
    loading: false,
    error: null,
};

const getpermissionsReducer = (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case types.GET_PERMISSION_START:
        case types.CREATE_PERMISSION_START:
        case types.UPDATE_PERMISSION_START:
            return {
                ...state,
                loading: true,
            };
        case types.GET_PERMISSION_SUCCESS:
            return {
                ...state,
                loading: false,
                permissions: action.payload,
            };
        case types.CREATE_PERMISSION_SUCCESS:
        case types.UPDATE_PERMISSION_SUCCESS:

            return {
                ...state,
                loading: false,
            }
        case types.GET_PERMISSION_FAILURE:
        case types.CREATE_PERMISSION_FAILURE:
        case types.UPDATE_PERMISSION_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            }
        default:
            return state;
    }


}
export default getpermissionsReducer;