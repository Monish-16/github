import types from '../Actions/actionTypes';

const INITIAL_STATE = {
    loading: false,
    departments: [],
    error: null,
};

const getDepartmentReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.GET_DEPARTMENT_START:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case types.GET_DEPARTMENT_SUCCESS:
            return {
                ...state,
                loading: false,
                departments: action.payload,
                error: null,
            };
        case types.GET_DEPARTMENT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            }
        default:
            return state;
    }
};

export default getDepartmentReducer; 