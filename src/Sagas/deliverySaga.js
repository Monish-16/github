import {
    call,
    put,
    delay,
    takeEvery,
}
    from 'redux-saga/effects';
import { deliveryApi } from '../Api/Config';
import { getDeliverySuccess, getDeliveryFailure } from '../Actions/deliveryActions';
import types from '../Actions/actionTypes';

export function* onLoadUsersStartAsync() {
    try {
        const res = yield call(deliveryApi);
        if (res.status === 200) {
            const orders = JSON.parse(res.data)
            yield delay(100);
            yield put(getDeliverySuccess(orders.data))
            // console.log(orders.data)
        }
    } catch (error) {
        yield put(getDeliveryFailure(error.res.data))
    }
}

export function* onLoadUsers() {
    yield takeEvery(types.GET_DELIVERY_START, onLoadUsersStartAsync)
}
export function* deliverySagas() {
    yield call(onLoadUsers)
}