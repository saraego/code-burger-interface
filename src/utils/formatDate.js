const formtDate = (data) => {
    return new Date(data).toLocaleDateString('pt-Br', {
        year: '2-digit',
        month: 'short',//or 2-digit
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    })
}

export default formtDate