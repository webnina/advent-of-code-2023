import { splitStringPerLine } from "../utils/line-splitter.js";
import { getFinalCalibrationValue, sumUpCalibrationValues } from "./helper.js";

export function printSumOfCalibrationValues(fileData) {
    const lines = splitStringPerLine(fileData)
    for (let i = 0; i < lines.length; i++) {
        lines[i] = getFinalCalibrationValue(lines[i])
    }
    console.log("Tag 1.1: Sum of calibration values: ", sumUpCalibrationValues(lines))
}
