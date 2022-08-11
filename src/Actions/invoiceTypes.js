import types from "./actionTypes";

export const getInvoiceStart = () => ({
    type: types.GET_INVOICE_START,
})

export const getInvoiceSuccess = (invoices) => ({
    type: types.GET_INVOICE_SUCCESS,
    payload: invoices,
});

export const getInvoiceFailure = (error) => ({
    type: types.GET_INVOICE_FAILURE,
    payload: error,
});