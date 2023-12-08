import { removeCharacters, splitStringPerLine } from "../utils/splitter.js"
import {fillAlmanac, getMinLocationForSeeds} from "./helper.js"

export function printLowestLocationFromSeedRanges(fileData) {
    let lines = splitStringPerLine(fileData)
    const seedsRanges = removeCharacters(lines[0]).map(seed => Number(seed))
    lines.shift()
    const almanac= fillAlmanac(lines)
    const minLocations = []
    while (seedsRanges.length > 0) {
        const seedSource = seedsRanges.shift()
        const seedRangeSize = seedsRanges.shift()

        for (let counter = 0; counter < seedRangeSize; counter++) {
            minLocations.push(getMinLocationForSeeds(almanac, lines, [seedSource+counter]))
        }
    }

    console.log('Tag 5.2: Min location for all seeds:', Math.min(...minLocations))
}
