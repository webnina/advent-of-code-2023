import { splitStringPerLine } from "../utils/splitter.js"
import { matrices } from "./matrices.js"

export function printSumOfAlGearRatios(fileData) {
    const lines = splitStringPerLine(fileData)
    let sum = 0

    for (let line = 0; line < lines.length; line++) {
        for (let char = 0; char < lines[line].length; char++) {
            if (lines[line].charAt(char) === '*') {
                sum += getGearRatio(lines, line, char)
            }
        }
    }

    console.log("Tag 3.2: Sum of all gear ratios:", sum)
}

function getGearRatio(lines, line, char) {
    const numbers = extractNumbers(lines, line, char)

    if (numbers.size === 2) {
        const array = [...numbers]
        return array[0] * array[1]
    }

    return 0
}

function extractNumbers(lines, line, char) {
    const numbers = new Set()

    matrices.matrix3x3.forEach(([x, y]) => {
        const currentChar = lines[line + y]?.charAt(char + x)

        if (!isNaN(currentChar)) {
            let number = currentChar

            number = checkDirection(lines, line + y, char + x, -1, number) // Check left
            number = checkDirection(lines, line + y, char + x, 1, number) // Check right

            numbers.add(Number(number))
        }
    });

    return numbers
}

function checkDirection(lines, line, char, offset, number) {
    let currentChar = ''
    let counter = 1

    while (counter <= 2) {
        currentChar = lines[line]?.charAt(char + offset * counter)

        if (!isNaN(currentChar)) {
            number = addCharToNumber(offset, currentChar, number)
        } else {
            break
        }
        counter++
    }

    return number
}

function addCharToNumber(offset, currentChar, number) {
    return (offset === -1)
        ? currentChar + number
        : number + currentChar
}
