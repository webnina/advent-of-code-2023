import { splitStringPerLine } from "../utils/splitter.js"
import { getAmountOfWinningChances } from "./helper.js"

export function printNumberOfWaysToBeatRecordInBigGame(fileData) {
    const [time, distance] = splitStringPerLine(fileData)
        .map(line => line.split(" ").filter(Boolean).slice(1))
        .map(line => line.join(""))
        .map(Number)

    let beat = getAmountOfWinningChances([time, distance])
    console.log('Tag 6.1: Number of ways to beat record:', beat)
}


