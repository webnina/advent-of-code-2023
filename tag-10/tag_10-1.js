import { splitStringPerLine } from "../utils/splitter.js"

const NORTH = [-1, 0]
const WEST = [0, -1]
const SOUTH = [1, 0]
const EAST = [0, 1]

const Direction = {
    EAST: 1,
    NORTH: 2,
    WEST: 3,
    SOUTH: 4
}
let currentDirection = Direction.SOUTH

export function printPointFarthestFromStart(fileData) {
    const map = splitStringPerLine(fileData).map(row => row.split(""))
    let currentPoint = findStartingPoint(map)
    let currentSign = map[currentPoint[0]+1][currentPoint[1]]

    let point = 0
    let walkingDir
    while(currentSign !== 'S') {
        switch (currentSign) {
            case '|':
                walkingDir = currentDirection === Direction.NORTH ? NORTH : SOUTH
                break
            case '-':
                walkingDir = currentDirection === Direction.WEST ? WEST : EAST
                break
            case 'L':
                if (currentDirection === Direction.SOUTH) {
                    currentDirection = Direction.EAST
                    walkingDir = EAST
                } else {
                    currentDirection = Direction.NORTH
                    walkingDir = NORTH
                }
                break
            case 'J':
                if (currentDirection === Direction.EAST) {
                    currentDirection = Direction.NORTH
                    walkingDir = NORTH
                } else {
                    currentDirection = Direction.WEST
                    walkingDir = WEST
                }
                break
            case '7':
                if (currentDirection === Direction.NORTH) {
                    currentDirection = Direction.WEST
                    walkingDir = WEST
                } else {
                    currentDirection = Direction.SOUTH
                    walkingDir = SOUTH
                }
                break
            default:
            case 'F':
                if (currentDirection === Direction.NORTH) {
                    currentDirection = Direction.EAST
                    walkingDir = EAST
                } else {
                    currentDirection = Direction.SOUTH
                    walkingDir = SOUTH
                }
                break
        }

        currentSign = map[currentPoint[0]+walkingDir[0]][currentPoint[1] + walkingDir[1]]
        currentPoint[0] = currentPoint[0]+walkingDir[0]
        currentPoint[1] = currentPoint[1]+walkingDir[1]
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
