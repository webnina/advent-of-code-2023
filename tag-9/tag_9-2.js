import { splitStringPerLine } from "../utils/splitter.js"
import { getHistories } from "./helper.js"

export function printSumOfExtrapolatedValuesBackwards(fileData) {
    const startLines = splitStringPerLine(fileData).map(line => line.split(" ").map(Number))
    const histories = getHistories(startLines)
    const sum2 = histories.reduce((acc, value) => acc + value.reverse().reduce((acc, val) => val[0] - acc, 0), 0)
    console.log('Tag 9.2: Sum of extrapolated values: ', sum2)
}
