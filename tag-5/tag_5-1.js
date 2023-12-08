import { removeCharacters, splitStringPerLine } from "../utils/splitter.js"
import { fillAlmanac, getMinLocationForSeeds } from "./helper.js"

export function printLowestLocation(fileData) {
    let lines = splitStringPerLine(fileData)
    const seeds = removeCharacters(lines[0]).map(seed => Number(seed))
    lines.shift() // remove seeds
    const almanac = fillAlmanac(lines)

    const minLocation = getMinLocationForSeeds(almanac, lines, seeds)
    console.log('Tag 5.1: Min location for seeds:', minLocation)
}
