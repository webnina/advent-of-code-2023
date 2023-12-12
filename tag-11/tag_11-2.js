import { splitStringPerLine } from "../utils/splitter.js"
import { getSum } from "./helper.js"

const expansionFactor = 1000000 - 1

export function printSumOfShortestPathsExtreme(fileData) {
    let galaxyMap = splitStringPerLine(fileData).map(row => row.split(""))
    let sum = getSum(galaxyMap, expansionFactor)

    console.log("Tag 11.2: Sum of shortest paths between galaxies extreme: ", sum)
}
