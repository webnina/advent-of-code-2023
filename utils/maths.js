export function sumUpValues(values) {
    return values.reduce((a, b) => Number(a) + Number(b), 0)
}

export function multiplyValues(values) {
    return values.reduce((a, b) => Number(a) * Number(b), 1);
}
