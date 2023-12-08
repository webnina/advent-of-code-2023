import { splitStringPerLine } from "../utils/splitter.js"
import { multiplyValues } from "../utils/maths.js"
import { getAmountOfWinningChances } from "./helper.js"

export function printNumberOfWaysToBeatRecord(fileData) {
    const [times, distances] = splitStringPerLine(fileData)
        .map(line => line.split(" ").filter(Boolean).slice(1).map(Number));

    const beat = times.map((time, index) => getAmountOfWinningChances([time, distances[index]]));
    console.log('Tag 6.1: Number of ways to beat record:', multiplyValues(beat));
}
