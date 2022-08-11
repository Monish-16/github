import types from "./actionTypes";

export const getPurchaseStart = () => ({
    type: types.GET_PURCHASE_START,
  });
  
  export const getPurchaseSuccess = (purchases) => ({
    type: types.GET_PURCHASE_SUCCESS,
    payload: purchases,
  });
   
  export const getPurchaseFailure = (error) => ({
    type: types.GET_PURCHASE_FAILURE,
    payload: error, 
  });

  export const createPurchaseStart = (purchase) => ({
    type: types.CREATE_PURCHASE_START,
    payload: purchase,
  });
  
  export const createPurchaseSuccess = () => ({
    type: types.CREATE_PURCHASE_SUCCESS,
  });
  
  export const createPurchaseFailure = (error) => ({
    type: types.CREATE_EVENT_FAILURE,
    payload: error,
  });

  export const updatePurchaseStart = (purchase) => ({
    type: types.UPDATE_PURCHASE_START,
    payload: purchase,
  });

  export const updatePurchaseSuccess = () => ({
    type: types.UPDATE_PURCHASE_SUCCESS,
  });

  export const updatePurchaseError = (error) => ({
    type: types.UPDATE_PURCHASE_FAILURE,
    payload: error,
  });


  export const deletePurchaseStart = (purchase) => ({
    type: types.DELETE_PURCHASE_START,
    payload: purchase,
  });
  
  export const deletePurchaseSuccess = () => ({
    type: types.DELETE_PURCHASE_SUCCESS,
  });
  
  export const deletePurchaseError = (error) => ({
    type: types.DELETE_PURCHASE_FAILURE,
    payload: error,
  });