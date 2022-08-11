import  types from './actionTypes';

export const getDeliveryStart = () => ({
    type: types.GET_DELIVERY_START,  
  });

  export const getDeliverySuccess = (data) => ({
    type: types.GET_DELIVERY_SUCCESS,
    payload: data,
  }); 

  export const getDeliveryFailure = (error) => ({
    type: types.GET_DELIVERY_FAILURE,
    payload: error,
  }); 

