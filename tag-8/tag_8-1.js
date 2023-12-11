import { splitStringPerLine } from "../utils/splitter.js"

const navigationMap = new Map([])

export function printStepsRequiredToZZZ(fileData) {
    let lines = splitStringPerLine(fileData)
    const instructions = lines[0]
    lines.shift()
    fillNavigationMap(lines)

    let currentStep = 'AAA'
    let navigationCounter = 0, steps = 0

    while (currentStep !== 'ZZZ') {
        if (navigationCounter >= instructions.length) {
            navigationCounter = 0
        }

        if (instructions.charAt(navigationCounter) === 'R') {
            currentStep = navigationMap.get(currentStep)[1]
        } else {
            currentStep = navigationMap.get(currentStep)[0]
        }

        navigationCounter++
        steps++
    }

    console.log('Tag 8.1: Steps to reach ZZZ:', steps)
}

function fillNavigationMap(lines) {
    lines.map(line => {
        let [key, value] = line.split(" = ")
        value = value.replace(/[()]/g, '').split(", ")
        navigationMap.set(key, value)
    })
}
