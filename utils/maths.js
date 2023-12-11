export function sumUpValues(values) {
    return values.reduce((a, b) => Number(a) + Number(b), 0)
}

export function multiplyValues(values) {
    return values.reduce((a, b) => Number(a) * Number(b), 1);
}

// größtes gemeinsames Vielfaches (GCD)
function gcd(a, b) {
    if (b === 0) {
        return a
    } else {
        return gcd(b, a % b)
    }
}

// kleinstes gemeinsames Vielfaches (LCM)
function lcm(a, b) {
    return (a * b) / gcd(a, b)
}

// LCM für ein Array von Zahlen
export function lcmOfArray(array) {
    let result = array[0]

    for (let i = 1; i < array.length; i++) {
        result = lcm(result, array[i])
    }

    return result
}
