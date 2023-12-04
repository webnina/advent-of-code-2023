import { splitStringPerLine } from "../utils/splitter.js"
import { splitWinningAndMyNumbers } from "./helper.js"

let cards = []
export function printAmountOfScratchcardCopies(fileData) {
    cards = splitStringPerLine(fileData)
    cards = cards.map(card => mapCardToObject(card))
    let sum = 0
    for (let card of cards) {
        sum += sumUpScratchingCardCopies(card)
    }
    sum += cards.length // add original cards to sum of copies
    console.log("Tag 4.2: Sum of card copies:", sum)
}

function mapCardToObject(card) {
    let [id, numbers] = card.split(':').filter(Boolean)
    id = id.split(' ').filter(Boolean)[1] // remove "Game"
    let [winningNumbers, myNumbers] = splitWinningAndMyNumbers(numbers)
    return { id: Number(id), winningNumbers, myNumbers }
}

function sumUpScratchingCardCopies(scratchcard) {
    const matches = getNumberOfMatches(scratchcard)

    if (matches === 0) { // end of recursion
        return 0
    } else {
        let cnt = 1
        let copies = matches
        while (cnt <= matches) {
            copies += sumUpScratchingCardCopies(findCardWithId(scratchcard.id + cnt))
            cnt++
        }
        return copies
    }
}

function getNumberOfMatches(scratchcard) {
    let matches = 0
    for (let winNumber of scratchcard.winningNumbers) {
        for (let myNumber of scratchcard.myNumbers) {
            if (winNumber === myNumber) {
                matches++
            }
        }
    }
    return matches
}

function findCardWithId(id) {
    return cards.find(card => card.id === id)
}
