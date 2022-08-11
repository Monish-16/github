import {
    call,
    put,
    delay,
    takeLatest,
    fork
} from 'redux-saga/effects';
import { purchaseApi, purchaseCreateApi, purchaseDeleteApi, purchaseUpdateApi } from '../Api/Config';
import types from '../Actions/actionTypes';
import {
    getPurchaseSuccess, getPurchaseFailure,
    createPurchaseSuccess, createPurchaseFailure,
    updatePurchaseError, updatePurchaseSuccess, deletePurchaseSuccess, deletePurchaseError
} from '../Actions/purchaseActions';




export function* onLoadPurchasesStartAsync() {
    try {
        const res = yield call(purchaseApi);
        const purchases = JSON.parse(res.data)
        if (res.status === 200) {
            yield delay(100);
            yield put(getPurchaseSuccess(purchases))
        }
    } catch (error) {
        yield put(getPurchaseFailure(error.res))
    }
}


export function* onCreatePurchasesStartAsync({ payload }) {
    try {
        const res = yield call(purchaseCreateApi, payload);
        const purchases = JSON.parse(res.data)
        if (res.status === 200) {
            yield put(createPurchaseSuccess(purchases))
        }
    } catch (error) {
        yield put(createPurchaseFailure(error.res))
    }
}


export function* onUpdatePurchasesStartAsync({ payload }) {
    try {
        const res = yield call(purchaseUpdateApi, payload);
        if (res.status === 200) {
            yield put(updatePurchaseSuccess())
        }
    } catch (error) {
        yield put(updatePurchaseError(error.res))
    }
}

function* ondeleteUserStartAsync({ payload }) {
    try {
        const response = yield call(purchaseDeleteApi, payload);
        if (response.status === 200) {
            yield put(deletePurchaseSuccess());
        }
    } catch (error) {
        yield put(deletePurchaseError(error.response));
    }
}



export function* onLoadPurchases() {
    yield takeLatest(types.GET_PURCHASE_START, onLoadPurchasesStartAsync)
}

export function* onCreatePurchases() {
    yield takeLatest(types.CREATE_PURCHASE_START, onCreatePurchasesStartAsync)
}
export function* onUpdatePurchases() {
    yield takeLatest(types.UPDATE_PURCHASE_START, onUpdatePurchasesStartAsync)
}

function* onDeletePurchase() {
    yield takeLatest(types.DELETE_PURCHASE_START, ondeleteUserStartAsync)
}



export function* purchaseSagas() {
    yield fork(onLoadPurchases)
    yield fork(onCreatePurchases)
    yield fork(onUpdatePurchases)
    yield fork(onDeletePurchase)
}