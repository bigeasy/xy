exports.bits = function (n, width) {
    var padded = (new Array(width).join('0') + n.toString(2))
    return padded.substr(-width)
}

exports.rotateLeft = function (number, width, offset, count) {
    var mask = 0xffffffff >>> (32 - width) << offset >>> 0
    var bits = number & mask
    var top = bits << count
    var bottom = bits >>> (width - count)
    return ((top & mask) | (bottom & mask) | (number & ~mask)) >>> 0
}

exports.rotateRight = function (number, width, offset, count) {
    var mask = 0xffffffff >>> (32 - width) << offset >>> 0
    var bits = number & mask
    var bottom = bits >>> count
    var top = bits << (width - count)
    return ((top & mask) | (bottom & mask) | (number & ~mask)) >>> 0
}

exports.trailingSetBits = function (i) { // :: Int -> Int
    var ones = ~i & (i + 1)
    return Math.log(ones) / Math.log(2)
}

// Returns the number of bits required to store an integer
exports.bitPrecision = function (n) { // :: Int > Int
    var ret = 0
    while (n > 0) {
        ret++
        n = n >> 1
    }
    return ret
}
