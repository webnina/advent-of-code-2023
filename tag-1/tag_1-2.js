import { splitStringPerLine, splitCharactersAndDegits } from "../utils/splitter.js"
import { getFinalCalibrationValue } from "./helper.js"
import { sumUpValues } from "../utils/maths.js"

const digitMapping = new Map([
    ['one', '1'],
    ['two', '2'],
    ['three', '3'],
    ['four', '4'],
    ['five', '5'],
    ['six', '6'],
    ['seven', '7'],
    ['eight', '8'],
    ['nine', '9']
])

export function printRealSumOfCalibrationValues(fileData) {
    let lines = splitStringPerLine(fileData)
        .map(line => {
            const values = getCalibrationValuesFromLine(line)
            return getFinalCalibrationValue(values.join(""))
        })
        .filter(Boolean)

    console.log("Tag 1.2: Real sum of calibration values: ", sumUpValues(lines))
}

function getCalibrationValuesFromLine(line) {
    return splitCharactersAndDegits(line)
        .filter(Boolean)
        .map(value => {
            if (digitMapping.has(value)) {
                return getLetterDigits(value)
            } else if (isNaN(Number(value))) {
                return getCalibrationValuesFromLetterSalad(value)
            }
            return value
        })
}

function getCalibrationValuesFromLetterSalad(letterSalad) {
    const letterCharacters = getLetterCharacterMatches(letterSalad)
        .map(match => getLetterDigits(match))

    return letterCharacters.length !== 0 ? letterCharacters.join("") : ""
}

function getLetterDigits(input) {
    return digitMapping.get(input) || ''
}

function getLetterCharacterMatches(inputString) {
    const matches = []

    digitMapping.forEach((value, searchTerm) => {
        let index = inputString.indexOf(searchTerm)
        while (index !== -1) {
            matches.push({ term: searchTerm, index })
            index = inputString.indexOf(searchTerm, index + 1)
        }
    });

    matches.sort((a, b) => a.index - b.index)
    return matches.map(match => match.term)
}
