export function getMinLocationForSeeds(almanac, lines, seeds) {
    let minLocation = Infinity
    seeds.forEach(seed => {
        let value = seed
        for (let i = 0; i < almanac.length; i++) {
            value = getDestinationValue(almanac[i], value)
        }

        minLocation = Math.min(minLocation, value)
    })
    return minLocation
}

export function getDestinationValue(almanac, sourceValue) {
    let destinationValue = null
    almanac.forEach(range => {
        let [destination, source, rangeSize] = range.split(" ").map(num => Number(num))
        if (!destinationValue) {
            destinationValue = getDestinationId(destination, source, rangeSize, sourceValue)
        }
    })
    return destinationValue ?? sourceValue
}

export function getDestinationId(destination, source, rangeSize, value) {
    let endOfRange = source + rangeSize

    if (value >= source && value <= endOfRange) {
        return destination + (value - source)
    } else {
        return null
    }
}

export function fillAlmanac(lines) {
    const almanac = []
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
    return almanac
}

