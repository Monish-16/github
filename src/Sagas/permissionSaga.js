import {
    call,
    put,
    delay,
    takeLatest,
    fork
  } from 'redux-saga/effects';
  import types from '../Actions/actionTypes';
  import { permissionApi, permissionCreateApi, permissionUpdateApi } from "../Api/Config"
  import {
    getPermissionSuccess, getPermissionFailure,
    createPermissionFailure, createPermissionSuccess,
    updatePermissionSuccess, updatePermissionError
  } from '../Actions/permissionActions';
  
  export function* onLoadPermissionsStartAsync() {
    try {
      const res = yield call(permissionApi);
      const permissions = JSON.parse(res.data)
      if (res.status === 200) {
        yield delay(100);
        yield put(getPermissionSuccess(permissions))
      }
    } catch (error) {
      yield put(getPermissionFailure(error.res))
    }
  }
  
  export function* onCreatePermissionsStartAsync({ payload }) {
    try {
      const res = yield call(permissionCreateApi, payload);
      const permissions = JSON.parse(res.data)
      if (res.status === 200) {
        yield put(createPermissionSuccess(permissions))
      }
    } catch (error) {
      yield put(createPermissionFailure(error.res))
    }
  }
  
  export function* onUpdatePermissionsStartAsync({ payload }) {
    try {
      const response = yield call(permissionUpdateApi, payload);
      if (response.status === 200) {
        yield put(updatePermissionSuccess());
      }
    } catch (error) {
      yield put(updatePermissionError(error.response));
    }
  }
  
  export function* onCreatePermission() {
    yield takeLatest(types.CREATE_PERMISSION_START, onCreatePermissionsStartAsync)
  }
  
  export function* onUpdatePermission() {
    yield takeLatest(types.UPDATE_PERMISSION_START, onUpdatePermissionsStartAsync)
  }
  
  export function* onPermissionGet() {
    yield takeLatest(types.GET_PERMISSION_START, onLoadPermissionsStartAsync)
  }
  
  export function* permissionsSagas() {
    yield fork(onPermissionGet)
    yield fork(onCreatePermission)
    yield fork(onUpdatePermission)
  }