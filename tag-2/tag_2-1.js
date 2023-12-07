import { removeCharacters, splitStringPerLine } from "../utils/splitter.js";
import { sumUpValues } from "../utils/maths.js";

const maxCubes = new Map([
    ['red', 12],
    ['green', 13],
    ['blue', 14]
])

export function printAmountOfPossibleGames(fileData) {
    const gameIds = splitStringPerLine(fileData)
        .map(game => {
            let [gameId, currentGame] = game.split(":")
            return isGamePossible(currentGame) ? removeCharacters(gameId).join("") : ""
        })
        .filter(Boolean)
    console.log("Tag 2.1: Sum of IDs from possible games: ", sumUpValues(gameIds))
}

function isGamePossible(game) {
    const rounds = game.split(";")
    const roundsAfter = rounds
        .map(round => isRoundPossible(round) ? round : "")
        .filter(Boolean)
    return rounds.length === roundsAfter.length
}

function isRoundPossible(round) {
    const colors = round.split(",")
    const colorsAfter = colors
        .map(color => isColorAmountPossible(color.split(" ").filter(Boolean)) ? color : "")
        .filter(Boolean)
    return colors.length === colorsAfter.length
}

function isColorAmountPossible([amount, color]) {
    return Number(amount) <= maxCubes.get(color)
}
