function formatMoney(argument: string) {
    const result: number = +argument
    return result.toLocaleString('vi-VN', {
        style: 'currency',
        currency: 'VND',
    })
}

export { formatMoney }
