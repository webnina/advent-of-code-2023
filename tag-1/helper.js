import { removeCharacters } from "../utils/splitter.js";

export function getFinalCalibrationValue(line) {
    const numberValues = removeCharacters(line)
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
