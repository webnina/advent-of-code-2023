import { splitStringPerLine } from "../utils/splitter.js"
import { getSum } from "./helper.js"

export function printSumOfShortestPaths(fileData) {
    let galaxyMap = splitStringPerLine(fileData).map(row => row.split(""))
    let sum = getSum(galaxyMap)

    console.log("Tag 11.1: Sum of shortest paths between galaxies: ", sum)
}
