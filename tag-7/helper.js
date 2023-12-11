import { playJokers } from "./tag_7-2.js"

export const HandCardType = {
    FIVE_OF_A_KIND: 6,
    FOUR_OF_A_KIND: 5,
    FULL_HOUSE: 4,
    THREE_OF_A_KIND: 3,
    TWO_PAIR: 2,
    ONE_PAIR: 1,
    HIGH_CARD: 0
}

let playWithJoker = false
let myStrengthMap = []

export function sumUpAllTotals(cards) {
    return cards.reduce((total, hand, index) => {
        const [, value] = hand.split(" ")
        return total + Number(value) * (index + 1)
    }, 0)
}

export function quickSort(arr, strengthMap, withJoker) {
    if (arr.length <= 1) {
        return arr
    }

    playWithJoker = withJoker
    myStrengthMap = strengthMap

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

    return [
        ...quickSort(left, strengthMap, withJoker),
        pivot,
        ...quickSort(right, strengthMap, withJoker)]
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

function handCardsAreWeaker(handCards, pivotCards) {
    for (let i = 0; i < handCards.length; i++) {
        if (myStrengthMap.get(handCards[i]) < myStrengthMap.get(pivotCards[i])) {
            return true
        } else if (myStrengthMap.get(handCards[i]) > myStrengthMap.get(pivotCards[i])) {
            return false
        }
    }
    return false
}

function getHandCardType(hand) {
    let countedCards = countCards(hand)
    if (playWithJoker) {
        countedCards = playJokers(countedCards)
    }
    switch (countedCards.size) {
        case 1: return HandCardType.FIVE_OF_A_KIND
        case 2: return Array.from(countedCards.values()).includes(4) ? HandCardType.FOUR_OF_A_KIND : HandCardType.FULL_HOUSE
        case 3: return Array.from(countedCards.values()).includes(3) ? HandCardType.THREE_OF_A_KIND : HandCardType.TWO_PAIR
        case 4: return HandCardType.ONE_PAIR
        default: return HandCardType.HIGH_CARD
    }
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
