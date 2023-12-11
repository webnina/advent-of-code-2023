import { splitStringPerLine } from "../utils/splitter.js"
import {fillNavigationMap, getSteps} from "./helper.js"

export function printStepsRequiredToZZZ(fileData) {
    let lines = splitStringPerLine(fileData)
    const instructions = lines[0]
    lines.shift()
    const navigationMap = fillNavigationMap(lines)
    const steps = getSteps('AAA', isEnd, instructions, navigationMap)

    console.log('Tag 8.1: Steps to reach ZZZ:', steps)
}

function isEnd(step) {
    return step === 'ZZZ'
}
