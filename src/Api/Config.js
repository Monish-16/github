import axios from "axios";
import {
  DELIVERY_API,
  EVENT_API,
  EVENT_CREATE_API,
  EVENT_UPDATE_API,
  TEMPLATE_API,
  TEMPLATE_CREATE_API,
  TEMPLATE_UPDATE_API,
  TEMPLATE_DELETE_API,
  GET_RULES_API,
  CREATE_RULES_API,
  UPDATE_RULES_API,
  GET_LOOKUP_API,
  GET_CUSTOMER_API,
  GET_STORAGE_API,
  CREATE_STORE_API,
  POOL_PROVIDER_API,
  UPDATE_CUSTOMER_API,
  BROKER_API,
  BROKER_CREATE_API,
  BROKER_UPDATE_API, DEPARTMENT_API,
  PERMISSION_API, PERMISSION_CREATE_API, PERMISSION_UPDATE_API,
  PURCHASE_API,LOOKUP_API,INVOICE_API,
  PURCHASE_CREATE_API,PURCHASE_UPDATE_API,PURCHASE_DELETE_API
} from './Api'
setTimeout(() => localStorage.getItem("token"), 500)
export const token = localStorage.getItem("token");
export const headers = {
  Authorization: `Bearer ${token}`,
  "Content-Type": "application/json",
  accept: "application/json",
}

export const deliveryApi = async () =>
  await axios.get(DELIVERY_API, { headers })


export const eventApi = async () =>
  await axios.get(EVENT_API, { headers })

export const createEventApi = async (event) =>
  await axios.post(EVENT_CREATE_API, event, { headers });

export const updateEventApi = async (event) =>
  await axios.put(EVENT_UPDATE_API, event, { headers });

export const templateApi = async () =>
  await axios.get(TEMPLATE_API, { headers })

export const templateCreateApi = async (template) =>
  await axios.post(TEMPLATE_CREATE_API, template, { headers })

export const updatetemplateApi = async (template) =>
  await axios.put(TEMPLATE_UPDATE_API, template, { headers });

export const deletetemplateApi = async (template) =>
  await axios.put(TEMPLATE_DELETE_API, template, { headers });

export const getRulesApi = async () =>
  await axios.get(GET_RULES_API, { headers });

export const createRulesApi = async (rule) =>
  await axios.post(CREATE_RULES_API, rule, { headers });

export const updateRulesApi = async (rule) =>
  await axios.put(UPDATE_RULES_API, rule, { headers });

export const getLookupApi = async () =>
  await axios.get(GET_LOOKUP_API, { headers });


export const getCustemerApi = async () =>
  await axios.get(GET_CUSTOMER_API, { headers });

export const getStoreApi = async () =>
  await axios.get(GET_STORAGE_API, { headers });

export const createCustomerApi = async (customer) =>
  await axios.post(CREATE_STORE_API, customer, { headers });

export const poolApi = async () =>
  await axios.get(POOL_PROVIDER_API, { headers });

export const updateCustomerApi = async (customer) =>
  await axios.put(UPDATE_CUSTOMER_API, customer, { headers });

export const brokerApi = async () =>
  await axios.get(BROKER_API, { headers })

export const brokerCreateApi = async (broker) =>
  await axios.post(BROKER_CREATE_API, broker, { headers })

export const brokerUpdateApi = async (broker) =>
  await axios.put(BROKER_UPDATE_API, broker, { headers })

export const permissionApi = async () =>
  await axios.get(PERMISSION_API, { headers })

export const permissionCreateApi = async (permission) =>
  await axios.post(PERMISSION_CREATE_API, permission, { headers })

export const permissionUpdateApi = async (permission) =>
  await axios.put(PERMISSION_UPDATE_API, permission, { headers })

  export const lookupApi = async() =>
  await axios.get(LOOKUP_API, { headers})

  export const invoiceApi = async () =>
  await axios.get(INVOICE_API,{headers})

export const departmentApi = async () =>
  await axios.get(DEPARTMENT_API, { headers })

export const purchaseApi = async () =>
  await axios.get(PURCHASE_API, { headers })

export const purchaseCreateApi = async (purchase) =>
  await axios.post(PURCHASE_CREATE_API, purchase, { headers })

export const purchaseUpdateApi = async (purchase) =>
  await axios.put(PURCHASE_UPDATE_API, purchase, { headers })

export const purchaseDeleteApi = async (purchase) =>
  await axios.put(PURCHASE_DELETE_API, purchase, { headers })