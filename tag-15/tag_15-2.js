import { getHashForSign } from "./helper.js"

export function printFocusingPowerOfLensConfiguration(fileData) {
    const signs = fileData.split(",")
        .map(sign => sign.split("\n")[0])
        .map(sign => sign.includes("=") ? sign.split("=") : sign.split("-").filter(Boolean))
    const boxes = fillBoxes(signs)

    console.log("Tag 15.2: Focusing power of lens configuration: ", calculateFocusingPower(boxes))
}

function fillBoxes(signs) {
    const boxes = Array.from({ length: 256 }, () => [])

    signs.forEach(sign => {
        const hash = getHashForSign(sign[0])

        if (sign.length === 2) {
            const index = boxes[hash].findIndex(box => box[0] === sign[0])
            if (index !== -1) {
                boxes[hash][index] = sign
            } else {
                boxes[hash].push(sign)
            }
        } else {
            boxes[hash] = boxes[hash].filter(box => box[0] !== sign[0])
        }
    })

    return boxes
}

function calculateFocusingPower(boxes) {
    let sum = 0

    boxes.forEach((box, boxIndex) => {
        if (box.length !== 0) {
            box.forEach((signs, index) => {
                sum += (boxIndex + 1) * (index + 1) * signs[1]
            })
        }
    })

    return sum
}
