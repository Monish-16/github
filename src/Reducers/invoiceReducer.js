import types from '../Actions/actionTypes';

const INITIAL_STATE = {
  loading: false,
 invoices: [],
  error: null,
};

const getInvoiceReducer= (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_INVOICE_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.GET_INVOICE_SUCCESS:
      return {
        ...state,
        loading: false,
        lookups: action.payload,
        error: null,
      };
    case types.GET_INVOICE_FAILURE:
      return{
        ...state,
        loading: false,
        error: action.payload,
       }
    default:
      return state;      
  }
};

export default getInvoiceReducer; 