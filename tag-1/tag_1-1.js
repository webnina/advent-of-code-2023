import { splitStringPerLine } from "../utils/splitter.js"
import { getFinalCalibrationValue } from "./helper.js"
import { sumUpValues } from "../utils/maths.js"

export function printSumOfCalibrationValues(fileData) {
    const lines = splitStringPerLine(fileData)
    for (let i = 0; i < lines.length; i++) {
        lines[i] = getFinalCalibrationValue(lines[i])
    }
    console.log("Tag 1.1: Sum of calibration values: ", sumUpValues(lines))
}
