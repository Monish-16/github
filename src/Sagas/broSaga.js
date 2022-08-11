import {
    call,
    put,
    delay,
    takeLatest,
    fork
}
    from 'redux-saga/effects';
import { brokerApi, brokerCreateApi, brokerUpdateApi } from '../Api/Config';
import {
    getBrokerSuccess, getBrokerFailure, createBrokerSuccess,
    createBrokerFailure, updateBrokerSuccess, updateBrokerFailure
} from '../Actions/brokerAction'
import types from '../Actions/actionTypes';

function* onLoadBrokerStartAsync() {
    try {
        const res = yield call(brokerApi);
        if (res.status === 200) {
            const brokers = JSON.parse(res.data)
            yield delay(100);
            yield put(getBrokerSuccess(brokers));
        }
    } catch (error) {
        yield put(getBrokerFailure(error.res.data));
    }
};

function* onCreateBrokerStartAsync({ payload }) {
    try {
        const res = yield call(brokerCreateApi, payload);
        console.log(res)
        const broker = JSON.parse(res.data)
        console.log(broker)
        if (res.status === 200) {
            yield put(createBrokerSuccess(broker))
        }
    } catch (error) {
        yield put(createBrokerFailure(error.res.data))
    }
};

function* onUpdateBrokerStartAsync({ payload }) {
    try {
        const response = yield call(brokerUpdateApi, payload);
        if (response.status === 200) {
            yield put(updateBrokerSuccess());
        }
    } catch (error) {
        yield put(updateBrokerFailure(error.response.data));
    }
}

function* onLoadBroker() {
    yield takeLatest(types.GET_BROKER_START, onLoadBrokerStartAsync)
};

function* onCreateBroker() {
    yield takeLatest(types.CREATE_BROKER_START, onCreateBrokerStartAsync)
};

function* onUpdateBroker() {
    yield takeLatest(types.UPDATE_BROKER_START, onUpdateBrokerStartAsync)
};

export function* BrokerSaga() {
    yield fork(onLoadBroker)
    yield fork(onCreateBroker)
    yield fork(onUpdateBroker)
}