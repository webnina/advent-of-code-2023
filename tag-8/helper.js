export function fillNavigationMap(lines) {
    const navigationMap = new Map([])
    lines.map(line => {
        let [key, value] = line.split(" = ")
        value = value.replace(/[()]/g, '').split(", ")
        navigationMap.set(key, value)
    })
    return navigationMap
}

export function getSteps(currentStep, isEnd, instructions, navigationMap) {
    let navigationCounter = 0, steps = 0

    while (!isEnd(currentStep)) {
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
    return steps
}
