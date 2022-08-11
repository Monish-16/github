import types from "./actionTypes";

export const getDepartmentStart =() =>({
    type:types.GET_DEPARTMENT_START,
})

export const getDepartmentSuccess =(departments) =>({
    type:types.GET_DEPARTMENT_SUCCESS,
    payload:departments,
})
export const getDepartmentFaliure =(error) =>({
    type:types.GET_DEPARTMENT_FAILURE,
    payload: error,
})