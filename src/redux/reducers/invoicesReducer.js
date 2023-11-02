
import { getData, setData } from '../db'

export const getUsedNumbers = (invoices) => {
    let list = [];
    for(const each of invoices) list.push(parseInt(each.invoiceNumber))
    return list;
}

export const generateId = () => {
    return (+ new Date() + Math.floor(Math.random() * 999999)).toString(36)
}

const copyInvoice = (state, payloadInvoice) => {

   
    let invoiceNumber = parseInt(payloadInvoice.invoiceNumber) + 1;
   
    const forbiddenInvoiceNumbers = getUsedNumbers(state);
    while(forbiddenInvoiceNumbers.includes(invoiceNumber)) invoiceNumber++;

   
    const invoice = {
        ...payloadInvoice,
        id: generateId(),
        invoiceNumber
    }

  
    return addInvoice(state, invoice);
}

const addInvoice = (state, payloadInvoice) => {

   
    const result = [...state, payloadInvoice]
   
    result.sort((a, b) => parseInt(a.invoiceNumber) - parseInt(b.invoiceNumber));
    
    setData(result);
    return result
}

const editInvoice = (state, payloadInvoice) => {

  
    const result = state.map((invoice) => 
        invoice.id === payloadInvoice.id ? payloadInvoice : invoice
    )

    result.sort((a, b) => a.invoiceNumber - b.invoiceNumber);
    
    setData(result);
    return result
}

const deleteInvoice = (state, payloadInvoice) => {

    const result = state.filter((invoice) => invoice.id !== payloadInvoice.id)
    
    setData(result);
    return result
}

const invoicesReducer = (state = getData(), action) => {
    switch(action.type) {
        case 'add':
            return addInvoice(state, action.payload)
        case 'edit':
            return editInvoice(state, action.payload)
        case 'delete':
            return deleteInvoice(state, action.payload)
        case 'copy':
            return copyInvoice(state, action.payload)
        default:
            return state
    }
}

export default invoicesReducer;
