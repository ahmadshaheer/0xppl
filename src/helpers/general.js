export const kFormatter = (num) => {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
}

export const trimText = (text, length) => {
    return text && text.length > length ?
                        `${text.substring(0, 30)}...` : text
}