import types from '../Actions/actionTypes';

import {
    call,
    put,
    delay,
    takeLatest,
    fork
} from 'redux-saga/effects';
import { invoiceApi } from '../Api/Config';
import { getInvoiceSuccess, getInvoiceFailure } from '../Actions/invoiceTypes';

export function* onLoadInvoiceStartAsync() {
    try {
        const res = yield call(invoiceApi);
        const invoices = JSON.parse(res.data)
        if (res.status === 200) {
            yield delay(100);
            yield put(getInvoiceSuccess(invoices))
        }
    } catch (error) {
        yield put(getInvoiceFailure(error.res))
    }
}

export function* onLoadInvoice() {
    yield takeLatest(types.GET_INVOICE_START, onLoadInvoiceStartAsync)
}

export function* invoiceSagas() {
    yield fork(onLoadInvoice)
}