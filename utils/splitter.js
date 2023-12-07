export function splitStringPerLine(input) {
    return input.split('\n').filter(Boolean)
}

export function removeCharacters(value) {
    return value.split(/\D+/).filter(Boolean)
}

export function splitCharactersAndDegits(value) {
    return value.split(/(\d+|\D+)/)
}
