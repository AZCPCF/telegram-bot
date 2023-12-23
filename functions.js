function persianToEnglish(persianNumber) {
    const persianDigits = '۰۱۲۳۴۵۶۷۸۹'
    const englishDigits = '0123456789'

    const convertedNumber = persianNumber
        .split('')
        .map((char) => {
            const index = persianDigits.indexOf(char)
            return index !== -1 ? englishDigits[index] : char
        })
        .join('')

    return convertedNumber
}
function calculator(ctx) {
    const expression = persianToEnglish(ctx.message.text)
    try {
        const result = eval(expression)
        ctx.reply(`result :\n${expression} =  ${result}`)
    } catch (error) {
        ctx.reply('Invalid expression. Please enter a valid mathematical expression.')
    }
}
module.exports = {
    calculator
}
