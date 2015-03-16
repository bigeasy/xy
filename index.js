var bitwise = require('./bitwise.js')

// Use Hilbert curve point generation to map 2D data to 1D space and vice-versa.
// Will later expand to allow `n` dimensions.

function Point(x, y, z) { // :: Int -> Int -> Int -> Point
    this.rotations = {
        x: 0,
        y: 0,
        z: 0
    }

    this.init = function (x, y, z) {
        this.x = Math.round(x) || 0
        this.y = Math.round(y) || 0
        if (z != null) {
            this.z = Math.round(z) || 0
            this.d = 3
            this.n = 4 * this.z + 2 * this.y  + this.x
        } else {
            this.z = null
            this.d = 2
        }
    }
    if (x instanceof Array) {
        this.init(x[0], x[1], x[2])
    } else {
        this.init(x, y, z)
    }
}

Point.prototype.rotate2d = function (n, xbit, ybit) { // : Int -> Int -> Int -> Point
    return new Point(rotate2d(n, this.x, this.y, xbit, ybit))
}

Point.prototype.rotate3d = function (level) { // :: Int -> Point
    return new Point(rotate3d(level, this.x, this.y, this.z))
}

Point.prototype.toArray = function () { // :: -> [Int, Int]
        if (this.d == 3) { return [this.x, this.y, this.z] }
        return [this.x, this.y]
}

// Accepts the height or width of a square/graph, and the coordinates to
// convert.
function convert2dPointToDistance (p, height) { // :: Int -> Int -> Int -> Int
    var xbit, ybit, level, d = 0
    var forHeight = p.x > p.y ? p.x : p.y

    // needs some tests to make sure height is compatible
    // What keeps the user from putting 54 down as the height
    while (forHeight >= height) {
            height *=2
    }
    // For each Hilbert level, we want to add an amount to
    // `d` based on which region we are in
    for (level = height / 2; level > 0; level = Math.floor(level / 2)) {
        // Determine what region we're in
        xbit = (p.x & level) > 0
        ybit = (p.y & level) > 0
        // increase distance based on region
        d += level * level * ((3 * xbit) ^ ybit)
        // rotate so that we'll be in sync with the next
        // region.
        p = p.rotate2d(level, xbit, ybit)
        // HEAD
        // p = p.rotate2d(height, xbit, ybit)
    }

    return d
}

// Accepts height or width of a square/graph and distance
function convertDistanceTo2dPoint (distance, height) { // :: Int -> Int -> [Int, Int]
    distance = Math.floor(distance)
    var xbit, ybit, level, p = new Point(0, 0)

    if (height <= Math.sqrt(distance))  {
        height = 2
        while (height <= Math.sqrt(distance)) {
            height *=2
        }
    }

    for (level = 1; level < height; level *= 2) {
        xbit = 1 & (distance / 2)
        ybit = 1 & (distance ^ xbit)

        p = p.rotate2d(level, xbit, ybit)
        p.x += level * xbit
        p.y += level * ybit
        distance = Math.floor(distance / 4)
    }

    return p.toArray()
}

// height/width of a square/graph and distance
function convertDistanceTo3dPoint (distance, height) { // Int -> Int -> [Int, Int, Int]
    distance = Math.floor(distance)
    var xbit, ybit, zbit, level, parity
    var iter = 2, log = 0, p = new Point(0, 0, 0)

    height = height || 2

    // vvv this is interesting.
    for (parity = 1; parity < height; parity *= 2, ++log) {}
    parity = log % 3;

    // the `|| distance` was removed from 2d version
    for (level = 1; level < height || distance > 0; level *=2) {
        xbit = distance & 1;
        ybit = (distance / 2) & 1;
        zbit = (distance / 4) & 1;

        var temp = rotate3d(level - 1, xbit ^ ybit, ybit ^ zbit, zbit)
        p.x = temp[0] * level + level - 1
        p.y = temp[1] * level + level - 1
        p.z = temp[2] * level + level - 1

        distance = Math.floor(distance / 8)
        level *= 2;
        iter++;
    }

    return p.rotateLeft(iter - parity + 1).toArray();
}

// Rotate the coordinate plane and (x,y)
function rotate2d (n, x, y, xbit, ybit) { // :: Int -> Int -> Int -> Int -> Int -> [Int, Int]
    if (ybit == 0  ) {
        if (xbit == 1) {
            x = n - 1 - x
            y = n - 1 - y
        }

        var temp = x
        x = y
        y = temp
    }

    return [x, y]
}

// Rotate the coordinate plane and (x,y, z)
function rotate3d(level, x, y, z) { // :: Int -> Int -> Int -> Int -> [Int, Int, Int]
    var index = 4 * z + 2 * y + x
    if (index == 0) {
        return [z, x, y]
    } else if (index == 1 || index == 3) {
        return [y, z, x]
    } else if (index == 2 || index == 6) {
        return [level - x, level - y, z]
    } else if (index == 5 || index == 7) {
        return [y, level - z, level - x]
    } else {
        return [level - z, x, level - y]
    }
}

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

// Returns the number of bits required to store an integer
function precision (n) { // :: Int > Int
    var ret = 0
    while (n > 0) {
        ret++
        n = n >> 1
    }
    return ret
}

function grayTransform (entry, direction, x, dim) { // :: Int -> Int -> Int -> Int
    return bitwise.rotateRight((x ^ entry), dim, 0, direction + 1)
}

function grayInverseTransform (entry, direction, x, dim) { // :: Int -> Int -> Int -> Int
    return grayTransform(bitwise.rotateRight(entry, dim, 0, direction + 1), dim - direction - 1, x, dim)
}

function entrySequence (i) { // :: Int -> Int
    if (i) {
        return grayCode(2 * Math.floor((i-1) / 2))
    }
    return 0
}

function directionSequence(i, dim) { // :: Int -> Int -> Int
    if (i == 0) return 0
    if (i % 2 == 0) return trailingSetBits(i - 1) % dim
    return trailingSetBits(i) % dim
}

function trailingSetBits (i) { // :: Int -> Int
    var ones = ~i & (i + 1)
    return Math.log(ones) / Math.log(2)
}

function hilbertIndex(point, options) { // :: [Int, Int, ..] -> {} -> Int
    options = options || {}
    var index = 0, code,
        entry = options.entry || 0,
        direction = options.direction || 0,
        i = options.precision || precision(Math.max.apply(null, point)) - 1,
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
        m = options.precision || precision(index),
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

function nthRoot(num, nArg, precArg) { // : Int -> Int -> Int -> Int
  var n = nArg || 2;
  var prec = precArg || 12;
 
  var x = 1; // Initial guess.
  for (var i=0; i<prec; i++) {
    x = 1/n * ((n-1)*x + (num / Math.pow(x, n-1)));
  }
 
  return x;
}

exports.xy2d = function (x, y, height) {
    height = height || 2
    return convert2dPointToDistance(new Point(x, y), height)
}

exports.xyz2d = function(x, y, z, height) {
    height = height || 2
    return convert3dPointToDistance(new Point(x, y, z), height)
}
exports.d2xy = convertDistanceTo2dPoint
exports.d2xyz = convertDistanceTo3dPoint
exports.hilbert = hilbertIndex
exports.hilbertInverse = hilbertIndexInverse
