import types from '../Actions/actionTypes';

const INITIAL_STATE = {
  loading: false,
  orders: [],
  error: null,
};

const getDeliveryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_DELIVERY_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.GET_DELIVERY_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: action.payload,
        error: null,
      };
    case types.GET_DELIVERY_FAILURE:
      return{
        ...state,
        loading: false,
        error: action.payload.error,
       }
    default:
      return state;      
  }
};

export default getDeliveryReducer; 
