import {getHashForSign} from "./helper.js";

export function printSumOfHashResults(fileData) {
    const signs = fileData.split(",").map(sign => sign.split("\n")[0])
    let sum = 0

    signs.forEach(sign => {
        sum += getHashForSign(sign)
    })

    console.log("Tag 15.1: Sum of hashes: ", sum)
}
