let expansionFactor

export function getSum(galaxyMap, factor) {
    expansionFactor = factor ?? 1
    let sum = 0
    const [expansionsHorizontal, expansionsVertical] = countEmptySpaces(galaxyMap)
    const galaxies = getGalaxyCoordinates(galaxyMap)

    galaxies.forEach((coordinates1, index1) => {
        galaxies.forEach((coordinates2, index2) => {
            if (index1 < index2) {
                const [x1, y1] = coordinates1
                const [x2, y2] = coordinates2
                sum += Math.abs(x1 - x2) + Math.abs(y1 - y2)
                sum += countExpansions(Math.max(x1, x2), Math.min(x1, x2), expansionsHorizontal)
                sum += countExpansions(Math.max(y1, y2), Math.min(y1, y2), expansionsVertical)
            }
        })
    })
    return sum
}

function getGalaxyCoordinates(galaxyMap) {
    let galaxies = new Map([])
    let galaxyId = 1

    galaxyMap.forEach((row, rowIndex) => {
        row.forEach((column, columnIndex) => {
            if (column === '#') {
                galaxies.set(galaxyId++, [rowIndex, columnIndex])
            }
        })
    })

    return galaxies
}

function countExpansions(maxPoint, minPoint, expansionIndexes) {
    let counted = 0
    expansionIndexes.forEach(index => {
        if (index <= maxPoint && index >= minPoint) {
            counted += expansionFactor
        }
    })
    return counted
}

function countEmptySpaces(galaxyMap) {
    let countedHorizontal = []
    let countedVertical = []

    for (let i = 0; i < galaxyMap.length; i++) {
        if (galaxyMap[i].every(column => column === '.')) {
            countedHorizontal.push(i)
        }

        let column = galaxyMap.map(row => row[i])
        if (column.every(col => col === '.')) {
            countedVertical.push(i)
        }
    }

    return [countedHorizontal, countedVertical]
}
