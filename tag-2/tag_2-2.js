import { splitStringPerLine } from "../utils/splitter.js";
import { multiplyValues, sumUpValues } from "../utils/maths.js";

export function printSumOfPower(fileData) {
    const powerOfGames = splitStringPerLine(fileData)
        .map(game => {
            let [, currentGame] = game.split(":")
            const minimum  = findMinimumAmount(currentGame)
            return multiplyValues(Array.from(minimum.values()))
        })
        .filter(Boolean)
    console.log("Tag 2.2: Sum of Power from games: ", sumUpValues(powerOfGames))
}

function findMinimumAmount(game) {
    const minimum = new Map([
        ['red', 0],
        ['green', 0],
        ['blue', 0]
    ])
    game.split(";").map(round => {
        round.split(",").map(color => {
            const [amount, col] = color.split(" ").filter(Boolean)
            if (Number(amount) > minimum.get(col)) {
                minimum.set(col, amount)
            }
        })
    })
    return minimum
}
