
export const setData = (list) => {
    localStorage.setItem('invoices', JSON.stringify(list))
}

export const getData = () => {
    const invoices = localStorage.getItem('invoices');
    return invoices != null ? JSON.parse(invoices) : []
}