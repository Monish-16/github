import types from "./actionTypes";

export const getBrokerStart = () => ({
    type: types.GET_BROKER_START,
});

export const getBrokerSuccess = (broker) => ({
    type: types.GET_BROKER_SUCCESS,
    payload: broker,
});

export const getBrokerFailure = (error) => ({
    type: types.GET_BROKER_FAILURE,
    payload: error,
});

export const createBrokerStart = (broker) => ({
    type: types.CREATE_BROKER_START,
    payload: broker,
});

export const createBrokerSuccess = () => ({
    type: types.CREATE_BROKER_SUCCESS,
});

export const createBrokerFailure = (error) => ({
    type: types.CREATE_BROKER_FAILURE,
    payload: error,
});

export const updateBrokerStart = (broker) => ({
    type: types.UPDATE_BROKER_START,
    payload: broker,
});

export const updateBrokerSuccess = () => ({
    type: types.UPDATE_BROKER_SUCCESS,
});

export const updateBrokerFailure = (error) => ({
    type: types.UPDATE_BROKER_FAILURE,
    payload: error,
});