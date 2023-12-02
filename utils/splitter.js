export function splitStringPerLine(input) {
    return input.split('\n').filter(Boolean)
}

export function removeCharacters(value) {
    return value.split(/\D+/).join("")
}

export function splitCharactersAndDegits(value) {
    return value.split(/(\d+|\D+)/)
}
