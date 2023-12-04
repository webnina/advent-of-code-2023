export function splitWinningAndMyNumbers(numbers) {
    return numbers.split('|').map(number => number.split(' ').filter(Boolean))
}
