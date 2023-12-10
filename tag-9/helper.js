export function getHistories(startLines) {
    const histories = []

    startLines.forEach(startLine => {
        histories.push(getHistoryForValues(startLine))
    })

    return histories
}

function getHistoryForValues(values) {
    let history = [values]
    let nextRow = []
    let counter = 0

    while (!allValuesZero(nextRow)) {
        nextRow = []
        history[counter].forEach((number, index) => {
            if (index < history[counter].length - 1) {
                nextRow.push(history[counter][index + 1] - number)
            }
        })
        history.push(nextRow)
        counter++
    }

    return history
}

function allValuesZero(values) {
    if (values.length === 0) {
        return false
    }
    return values.every(value => value === 0)
}
