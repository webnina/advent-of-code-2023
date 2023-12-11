import { splitStringPerLine } from "../utils/splitter.js"
import { sort, sumUpAllTotals } from "./helper.js"

const strengthMap = new Map([
    ['A', 14],
    ['K', 13],
    ['Q', 12],
    ['J', 11],
    ['T', 10],
    ['9', 9],
    ['8', 8],
    ['7', 7],
    ['6', 6],
    ['5', 5],
    ['4', 4],
    ['3', 3],
    ['2', 2],
])

export function printTotalWinningOfCards(fileData) {
    const lines = splitStringPerLine(fileData)
    const sortedHandCards = sort(lines, strengthMap, false)
    let total = sumUpAllTotals(sortedHandCards)

    console.log("Tag 7.1: total winning of cards:", total)
}
