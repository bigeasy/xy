var bitwise = require('./bitwise.js')

// Use Hilbert curve point generation to map n-dimensional data to 1D space and vice-versa.

// Helpers for new Hilbert index.

function grayCode (sequence) { // :: Int -> Int
    return sequence ^ (sequence >> 1)
}

// returns a non-negative int 'inverse' such that graycode(inverse) = g
function grayInverse (g) { // : Int -> Int
    var m = precision(g), inverse = g, j = 1
    while (j < m) {
        inverse = inverse ^ (g >> j)
        j++
    }
    return inverse
}

function grayTransform (entry, direction, x, dim) { // :: Int -> Int -> Int -> Int
    return bitwise.rotateRight((x ^ entry), dim, 0, direction + 1)
}

function grayInverseTransform (entry, direction, x, dim) { // :: Int -> Int -> Int -> Int
    return grayTransform(bitwise.rotateRight(entry, dim, 0, direction + 1), dim - direction - 1, x, dim)
}

// Returns the number of bits required to store an integer
function bitPrecision (n) { // :: Int > Int
    var ret = 0
    while (n > 0) {
        ret++
        n = n >> 1
    }
    return ret
}

// generate entry points
function entrySequence (i) { // :: Int -> Int
    if (i) {
        return grayCode(2 * Math.floor((i-1) / 2))
    }
    return 0
}

// calculate direction at each iteration
function directionSequence(i, dim) { // :: Int -> Int -> Int
    if (i == 0) return 0
    if (i % 2 == 0) return bitwise.trailingSetBits(i - 1) % dim
    return bitwise.trailingSetBits(i) % dim
}

// curve precision
function curvePrecision(index, dim) { // :: Int -> Int -> Int
    var n = Math.pow(2, dim)
    var bits = 32

    while(bits % dim != 0) --bits

    for (var i=1; i < bits; i++) {
        if (index < Math.pow(n, i)) return i+1
    }
}

function nthRoot(num, nArg, precArg) { // : Int -> Int -> Int -> Int
  var n = nArg || 2;
  var prec = precArg || 12;
 
  var x = 1; // Initial guess.
  for (var i=0; i<prec; i++) {
    x = 1/n * ((n-1)*x + (num / Math.pow(x, n-1)));
  }
 
  return x;
}

//N-dimensional conversions.

function hilbertIndex(point, options) { // :: [Int, Int, ..] -> {} -> Int
    options = options || {}
    var index = 0, code,
        entry = options.entry || 0,
        direction = options.direction || 0,
        i = options.bitPrecision || bitPrecision(Math.max.apply(null, point)) - 1,
        dim = point.length

    while (i >= 0) {

        var bits = 0
        var mask = 1 << dim - 1

        for (var k = 0; k < point.length; k++) {
            if (point[dim - (k+1)] & (1 << i)) {
                bits |= mask
            }
            mask >>>= 1
        }

        bits = grayTransform(entry, direction, bits, dim)
        code = grayInverse(bits)

        entry = entry ^ bitwise.rotateLeft(entrySequence(code), dim, 0, direction + 1)
        direction = (direction + directionSequence(code, dim) + 1) % dim
        index = (index << dim) | code

        i--
    }

    return index
}

function hilbertIndexInverse(dim, index, options) { // :: Int -> Int -> [Int, Int, ..]
    options = options || {}
    var entry = options.entry || 0,
        direction = options.direction || 0,
        m = curvePrecision(index, dim),
        p = Array.apply(null, new Array(dim)).map(Number.prototype.valueOf, 0)

    for (var i = m - 1; i >= 0; i--) {
        var mask = 1 << (i * dim), bits = 0, code

        for (var k = dim - 1; k >= 0; k--) {
            if (index & (mask << k)) {
                bits |= (1 << k)
            }
        }

        code = grayInverseTransform(entry, direction, grayCode(bits), dim)
        for (var k = 0; k < dim; k++) {
            if (code & (1 << k)) {
                p[k] |= (1 << i)
            }
        }

        entry = entry ^ bitwise.rotateLeft(entrySequence(bits), dim, 0, direction + 1)
        direction = (direction + directionSequence(bits, dim) + 1) % dim
    }
    return p
}

exports.hilbert = hilbertIndex
exports.hilbertInverse = hilbertIndexInverse
