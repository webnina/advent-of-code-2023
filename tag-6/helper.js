export function getAmountOfWinningChances(game) {
    let beat = 0
    for (let time = 0; time < game[0]; time++) {
        const millimeters = time * (game[0] - time)
        if (millimeters > game[1]) {
            beat++
        }
    }

    return beat
}
