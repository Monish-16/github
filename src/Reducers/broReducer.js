import types from '../Actions/actionTypes';

const INITIAL_STATE = {
    loading: false,
    brokers: [],
    error: null,
};

const brokerReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.GET_BROKER_START:
        case types.CREATE_BROKER_START:
        case types.UPDATE_BROKER_START:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case types.GET_BROKER_SUCCESS:
            return {
                ...state,
                loading: false,
                brokers: action.payload,
                error: null,
            };

        case types.CREATE_BROKER_SUCCESS:
        case types.UPDATE_BROKER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
            };

        case types.GET_BROKER_FAILURE:
        case types.CREATE_BROKER_FAILURE:
        case types.UPDATE_BROKER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
            }
        default:
            return state;
    }
};

export default brokerReducer;