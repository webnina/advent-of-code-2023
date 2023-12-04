import { splitStringPerLine } from "../utils/splitter.js"
import { splitWinningAndMyNumbers } from "./helper.js"

export function printPointsInTotal(fileData) {
    let cards = splitStringPerLine(fileData)
    cards = cards.map(card => card.split(':')[1]) // remove "Card x:"
    let sum = 0
    for (let card of cards) {
        let points = 0
        let [winningNumbers, myNumbers] = splitWinningAndMyNumbers(card)
        for (let winNumber of winningNumbers) {
            for (let myNumber of myNumbers) {
                if (winNumber === myNumber) {
                    points === 0 ? points++ : points = points * 2
                }
            }
        }
        sum += points
    }
    console.log("Tag 4.1: Sum of points from winning cards:", sum)
}
