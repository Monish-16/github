import types from "./actionTypes";

export const getLookupStart = () => ({
    type: types.GET_LOOKUP_START,
  });
  
  export const getLookupSuccess = (lookups) => ({
    type: types.GET_LOOKUP_SUCCESS,
    payload: lookups,
  });
   
  export const getLookupFailure = (error) => ({
    type: types.GET_LOOKUP_FAILURE,
    payload: error, 
  });