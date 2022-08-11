import types from "./actionTypes";

export const getPermissionStart = () => ({
    type: types.GET_PERMISSION_START,
  });
  
  export const getPermissionSuccess = (permissions) => ({
    type: types.GET_PERMISSION_SUCCESS,
    payload: permissions,
  });
  
  export const getPermissionFailure = (error) => ({
    type: types.GET_PERMISSION_FAILURE,
    payload: error,
  });

  export const createPermissionStart = (permission) => ({
    type: types.CREATE_PERMISSION_START,
    payload: permission,
  });
  
  export const createPermissionSuccess = () => ({
    type: types.CREATE_PERMISSION_SUCCESS,
  });
  
  export const createPermissionFailure = (error) => ({
    type: types.CREATE_PERMISSION_FAILURE,
    payload: error,
  });
  
  export const updatePermissionStart = (permission) => ({
    type: types.UPDATE_PERMISSION_START,
    payload: permission,
  });
  
  export const updatePermissionSuccess = () => ({
    type: types.UPDATE_PERMISSION_SUCCESS,
  });
  
  export const updatePermissionError = (error) => ({
    type: types.UPDATE_PERMISSION_FAILURE,
    payload: error,
  });