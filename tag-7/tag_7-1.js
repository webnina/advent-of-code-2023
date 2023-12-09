import { splitStringPerLine } from "../utils/splitter.js"

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

const HandCardType = {
    FIVE_OF_A_KIND: 6,
    FOUR_OF_A_KIND: 5,
    FULL_HOUSE: 4,
    THREE_OF_A_KIND: 3,
    TWO_PAIR: 2,
    ONE_PAIR: 1,
    HIGH_CARD: 0
}

export function printTotalWinningOfCards(fileData) {
    const lines = splitStringPerLine(fileData)
    const sortedHandCards = quickSort(lines)
    let total = 0

    sortedHandCards.forEach((hand, index) => {
        const [, value] = hand.split(" ")
        total += Number(value) * (index + 1)
    })

    console.log("Tag 7.1: total winning of cards:", total)
}

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr
    }

    const pivot = arr[arr.length - 1]
    const left = []
    const right = []

    for (let i = 0; i < arr.length - 1; i++) {
        if (isHandWeakerThanPivot(arr[i], pivot)) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)]
}

function isHandWeakerThanPivot(hand, pivot) {
    const [handCards, ] = hand.split(" ")
    const [pivotCards, ] = pivot.split(" ")
    const handCardType = getHandCardType(handCards)
    const pivotCardType = getHandCardType(pivotCards)

    if (handCardType < pivotCardType) {
        return true
    } else if (handCardType > pivotCardType) {
        return false
    } else {
        return handCardsAreWeaker(handCards, pivotCards)
    }
}

function getHandCardType(hand) {
    const countedCards = countCards(hand)
    switch (countedCards.size) {
        case 1: return HandCardType.FIVE_OF_A_KIND
        case 2: return Array.from(countedCards.values()).includes(4) ? HandCardType.FOUR_OF_A_KIND : HandCardType.FULL_HOUSE
        case 3: return Array.from(countedCards.values()).includes(3) ? HandCardType.THREE_OF_A_KIND : HandCardType.TWO_PAIR
        case 4: return HandCardType.ONE_PAIR
        default: return HandCardType.HIGH_CARD
    }
}

function handCardsAreWeaker(handCards, pivotCards) {
    for (let i = 0; i < handCards.length; i++) {
        if (strengthMap.get(handCards[i]) < strengthMap.get(pivotCards[i])) {
            return true
        } else if (strengthMap.get(handCards[i]) > strengthMap.get(pivotCards[i])) {
            return false
        }
    }
    return false
}

function countCards(hand) {
    const cardCount = new Map()

    for (let card of hand) {
        if (cardCount.has(card)) {
            cardCount.set(card, cardCount.get(card) + 1)
        } else {
            cardCount.set(card, 1)
        }
    }

    return cardCount
}
