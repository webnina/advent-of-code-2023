export function sumUpCalibrationValues(values) {
    return values.reduce((a, b) => Number(a) + Number(b), 0)
}

export function getFinalCalibrationValue(line) {
    const numberValues = line.split(/\D+/).join("") // D+ filtert alle Zahlen heraus
    switch(numberValues.length) {
        case 1:
            return numberValues + numberValues
        case 2:
            return numberValues
        case 3:
        default:
            return numberValues[0] + numberValues[numberValues.length - 1]
    }
}
