import { all, call } from 'redux-saga/effects';
import { authSagas } from './authSaga';
import { eventsSagas } from './eventSaga';
import { templateSaga } from './templateSaga';
import { ruleSaga } from './ruleSaga';
import { customerSaga } from './customerSaga';
import { storeSaga } from './storeSaga';
import { poolSaga } from './poolSaga';
import {BrokerSaga} from './broSaga';
import {permissionsSagas} from './permissionSaga';
import {departmentsSagas} from './departSaga';
import {purchaseSagas} from './purchaseSaga';
import {deliverySagas} from './deliverySaga';

export default function* rootSaga() {
  yield all([
    call(authSagas),
    call(deliverySagas),
    call(eventsSagas),
    call(templateSaga),
    call(ruleSaga),
    call(customerSaga),
    call(storeSaga),
    call(poolSaga),
    call(BrokerSaga),
    call(departmentsSagas),
    call(permissionsSagas),
    call(purchaseSagas),
   
  ]);
}  