export function getHashForSign(sign) {
    return sign.split("").reduce((acc, val) => ((acc + ascii(val)) * 17) % 256, 0)
}

function ascii (a) { return a.charCodeAt(0) }
