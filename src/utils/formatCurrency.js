const formtCurrency = value =>{
    return new Intl.NumberFormat('pt-br', {
        style:'currency',
        currency:'BRL'
    }).format(value)
}

export default formtCurrency