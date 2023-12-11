import { splitStringPerLine } from "../utils/splitter.js"

const Direction = {
    EAST: [0, 1],
    NORTH: [-1, 0],
    WEST: [0, -1],
    SOUTH: [1, 0]
}
let currentDirection = Direction.SOUTH

export function printPointFarthestFromStart(fileData) {
    const map = splitStringPerLine(fileData).map(row => row.split(""))
    let currentPoint = findStartingPoint(map)
    let currentSign = map[currentPoint[0]+1][currentPoint[1]]

    let point = 0
    let walkingDir
    while(currentSign !== 'S') {
        walkingDir = getCurrentWalkingDirection(currentSign)
        currentPoint[0] = currentPoint[0] + walkingDir[0]
        currentPoint[1] = currentPoint[1] + walkingDir[1]
        currentSign = map[currentPoint[0]][currentPoint[1]]
        point++
    }

    console.log('Tag 10.1: Point farthest from start: ', point/2)
}

function findStartingPoint(map) {
    let start = []
    map.forEach((col, colIndex) => {
        col.forEach((row, rowIndex) => {
            if (row === 'S') {
                start.push(colIndex)
                start.push(rowIndex)
            }
        })
    })
    return start
}

function getCurrentWalkingDirection(currentSign) {
    switch (currentSign) {
        case '|': return currentDirection === Direction.NORTH ? Direction.NORTH : Direction.SOUTH
        case '-': return currentDirection === Direction.WEST ? Direction.WEST : Direction.EAST
        case 'L': return currentDirection === Direction.SOUTH ? currentDirection = Direction.EAST : currentDirection = Direction.NORTH
        case 'J': return currentDirection === Direction.EAST ? currentDirection = Direction.NORTH : currentDirection = Direction.WEST
        case '7': return currentDirection === Direction.NORTH ? currentDirection = Direction.WEST : currentDirection = Direction.SOUTH
        default:
        case 'F': return currentDirection === Direction.NORTH ? currentDirection = Direction.EAST : currentDirection = Direction.SOUTH
    }
}
