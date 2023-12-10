import { splitStringPerLine } from "../utils/splitter.js"
import { getHistories } from "./helper.js"

export function printSumOfExtrapolatedValues(fileData) {
    const startLines = splitStringPerLine(fileData).map(line => line.split(" ").map(Number))
    const histories = getHistories(startLines)
    const sum = histories.reduce((acc, value) => acc + value.reduce((acc, val) => acc + val[val.length - 1], 0), 0)
    console.log('Tag 9.1: Sum of extrapolated values: ', sum)
}
