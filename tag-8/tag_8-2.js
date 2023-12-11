import { splitStringPerLine } from "../utils/splitter.js"
import { fillNavigationMap, getSteps } from "./helper.js"
import { lcmOfArray } from "../utils/maths.js"

export function printStepsUntilAllEndsWithZ(fileData) {
    let lines = splitStringPerLine(fileData)
    const instructions = lines[0]
    lines.shift()
    const navigationMap = fillNavigationMap(lines)

    let positions = Array.from(navigationMap.keys()).filter(step => step.endsWith('A'))
    let steps = []
    positions.forEach(start => {
        steps.push(getSteps(start, isEnd, instructions, navigationMap))
    })

    console.log('Tag 8.2: Steps until each path reaches XXZ', lcmOfArray(steps))
}

function isEnd(step) {
    return step.endsWith('Z')
}
