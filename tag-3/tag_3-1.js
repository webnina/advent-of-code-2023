import { splitStringPerLine } from "../utils/splitter.js"
import { matrices } from "./matrices.js"

export function printSumOfAllPartNumbers(fileData) {
    const lines = splitStringPerLine(fileData)
    let sum = 0

    for (let line = 0; line < lines.length; line++) {
        for (let char = 0; char < lines[line].length; char++) {
            const number = extractTypeOfNumber(lines[line], char)
            if (number !== null) {
                const matrix = getMatrixForNumber(number)
                if (matrix !== null && hasSymbolNeighbour(lines, line, char, matrix)) {
                    sum += Number(number)
                    char += number.length - 1
                }
            }
        }
    }
    console.log("Tag 3.1: Sum of all of the part numbers in the engine schematic:", sum)
}

function extractTypeOfNumber(line, char) {
    let number = ''
    for (let i = char; i < line.length; i++) {
        if (!isNaN(line.charAt(i))) {
            number += line.charAt(i)
        } else {
            break
        }
    }
    return number.length > 0 ? number : null
}

function getMatrixForNumber(number) {
    switch (number.length) {
        case 1:
            return matrices.matrix3x3
        case 2:
            return matrices.matrix4x4
        case 3:
            return matrices.matrix5x5
        default:
            return null
    }
}

function hasSymbolNeighbour(lines, line, char, matrix) {
    let hasSymbolAsNeighbour = false
    matrix.forEach(([x, y]) => {
        if (
            isNaN(lines[line + y]?.charAt(char + x)) &&
            lines[line + y]?.charAt(char + x) !== '.' &&
            lines[line + y]?.charAt(char + x) !== undefined
        ) {
            hasSymbolAsNeighbour = true
        }
    })
    return hasSymbolAsNeighbour
}
