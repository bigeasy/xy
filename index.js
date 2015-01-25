// Use Hilbert curve point generation to map 2D data to 1D space and vice-versa.
// Will later expand to allow `n` dimensions.

function Point(x, y, z) {
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

Point.prototype.rotate = function (p, n) { // :: Point -> Int -> Point
    // record rotations
    if (p.n == 0) return new Point(this.z, this.x, this.y)
    if (p.n == 1 || p.n == 3) return new Point(this.y, this.z, this.x)
    if (p.n == 2 || p.n == 6) return new Point(n - this.x, n - this.y, this.z)
    return new Point(n - this.z, this.x, n - this.y)
}

Point.prototype.rotate2d = function (n, xbit, ybit) { // : Int -> Int -> Int -> Point
    return new Point(rotate2d(n, this.x, this.y, xbit, ybit))
}

Point.prototype.rotate3d = function (level) { // :: Int -> Point
    return new Point(rotate3d(level, this.x, this.y, this.z))
}

Point.prototype.rotateLeft = function (n) { // :: Int -> Point
    if (n % 3 == 0) return this
    if (n % 3 == 1) return new Point(this.y, this.z, this.x)
    return new Point(this.z, this.x, this.y)
}

Point.prototype.rotateRight = function (n) { // :: Int -> Point
    if (n % 3 == 0) return this
    if (n % 3 == 1) return new Point(this.z, this.x, this.y)
    return new Point(this.y, this.z, this.x)
}

Point.prototype.toArray = function () { // :: -> [Int, Int]
        if (this.d == 3) { return [this.x, this.y, this.z] }
        return [this.x, this.y]
}

Point.prototype.mod = function (n) { // :: Int -> Point
    return new Point(this.x % n, this.y % n, this.z % n)
}

Point.prototype.unrotate = function (n) {
    // read this.rotations and undo
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

// height and coordinates.
function convert3dPointToDistance (p, height) { // :: Int -> Int -> Int -> Int -> Int
    var s = 1, level = 0
    var max = Math.max.apply(Math, p.toArray())
    for (; 2 * s <= max; s *= 2) {
        level = (level + 1) % 3
    }

    // shuffle axes
    // rotate based on parity
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
    var iter = 2, log = 0, p = new Point(x, y, z)

    height = height || 2

    for (parity = 1; parity < height; parity *= 2, log++) {}
    parity = log % 3;

    for (level = 1; level < height || distance > 0; level *=2) {
        xbit = distance & 1;
        ybit = (ditance / 2) & 1;
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
    index = 4 * z + 2 * y + x
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
