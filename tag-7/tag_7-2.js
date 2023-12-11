import { splitStringPerLine } from "../utils/splitter.js"
import { sort, sumUpAllTotals } from "./helper.js"

const strengthMap = new Map([
    ['A', 14],
    ['K', 13],
    ['Q', 12],
    ['T', 10],
    ['9', 9],
    ['8', 8],
    ['7', 7],
    ['6', 6],
    ['5', 5],
    ['4', 4],
    ['3', 3],
    ['2', 2],
    ['J', 1]
])

export function printTotalWinningOfCardsWithJokers(fileData) {
    const lines = splitStringPerLine(fileData)
    const sortedHandCards = sort(lines, strengthMap, true)
    let total = sumUpAllTotals(sortedHandCards)

    console.log("Tag 7.2: total winning of cards with jokers:", total)
}

export function playJokers(cardCount) {
    let maxKey = 'none'
    cardCount.forEach((value, key) => {
        if (value > (cardCount.get(maxKey) ?? 0)) {
            if (key !== 'J') {
                maxKey = key
            }
        }
    })

    if (cardCount.has('J')) {
        cardCount.set(maxKey, cardCount.get(maxKey) + cardCount.get('J'))
        cardCount.delete('J')
    }

    return cardCount
}
