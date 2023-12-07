import { removeCharacters, splitStringPerLine } from "../utils/splitter.js"

let lines = []
let seeds = []
const almanac = []

export function printLowestLocation(fileData) {
    lines = splitStringPerLine(fileData)
    seeds = removeCharacters(lines[0]).map(seed => Number(seed))
    lines.shift() // remove seeds
    fillAlmanac(lines)

    let minLocation = Infinity
    seeds.forEach(seed => {
        let value = seed
        for (let i = 0; i < almanac.length; i++) {
            value = getDestinationValue(i, value)
        }

        minLocation = Math.min(minLocation, value)
    })
    console.log('Tag 5: Min location for seeds:', minLocation)
}

function getDestinationValue(index, seed) {
    let destinationValue = null
    almanac[index].forEach(range => {
        let [destination, source, rangeSize] = range.split(" ").map(num => Number(num))
        if (!destinationValue) {
            destinationValue = getDestinationId(destination, source, rangeSize, seed)
        }
    })
    if (!destinationValue) {
        destinationValue = seed
    }
    return destinationValue
}

function getDestinationId(destination, source, rangeSize, value) {
    let endOfRange = source + rangeSize

    if (value >= source && value <= endOfRange) {
         return destination + (value - source)
    } else {
        return null
    }
}

function fillAlmanac(lines) {
    let index = 0
    for (let line = 0; line < lines.length; line++) {
        if (lines[line].includes('map')) {
            almanac[index] = []
            let offset = 1
            while (!lines[line+offset].includes('map')) {
                almanac[index].push(lines[line+offset])
                offset++
                if (line + offset >= lines.length) {
                    break
                }
            }
            line += almanac[index].length - 1
            index++
        }
    }
}
