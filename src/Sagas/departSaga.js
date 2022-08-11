import {
    call,
    put,
    delay,
    takeLatest,
    fork
} from 'redux-saga/effects';
import types from '../Actions/actionTypes';
import { departmentApi } from '../Api/Config';
import { getDepartmentSuccess, getDepartmentFaliure } from '../Actions/departmentAction';

export function* onLoadDepartmentStartAsync() {
    try {
        const res = yield call(departmentApi);
        const permissions = JSON.parse(res.data)
        if (res.status === 200) {
            yield delay(100);
            yield put(getDepartmentSuccess(permissions))
        }
    } catch (error) {
        yield put(getDepartmentFaliure(error.res))
    }
}
export function* onGetDepartment() {
    yield takeLatest(types.GET_DEPARTMENT_START, onLoadDepartmentStartAsync)
}

export function* departmentsSagas() {
    yield fork(onGetDepartment)
}