import { combineReducers } from 'redux';
import authReducer from './loginReducer';
import getEventReducer from './eventReducer';
import getTemplateReducer from './templateReducer';
import ruleReducer from './ruleReducer';
import lookupReducer from './lookupReducer';
import customerReducer from './customerReducer';
import storeReducer from './storeReducer';
import getPoolReducer from './poolReducer';
import brokerReducer from './broReducer';
import getDepartmentReducer from './departReducer';
import getpermissionsReducer from './permissionReducer';
import getDeliveryReducer from './deliveryReducer';
import getpurchaseReducer from './purchaseReducer';
import getInvoiceReducer from './invoiceReducer';
const rootReducer = combineReducers({
    auth: authReducer,
    fetchUsers: getDeliveryReducer,
    fetchEvents: getEventReducer,
    fetchTemplate: getTemplateReducer,
    fetchRule: ruleReducer,
    fetchLookup: lookupReducer,
    fetchCustomer: customerReducer,
    fetchStore: storeReducer,
    fetchPool: getPoolReducer,
    fetchBrokers: brokerReducer,
    fetchPurchases: getpurchaseReducer,
    fetchInvoice:getInvoiceReducer,
    fetchDepartments: getDepartmentReducer,
    fetchPermissions: getpermissionsReducer,
});

export default rootReducer;