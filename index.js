// Use Hilbert curve point generation to map 2D data to 1D space and vice-versa.
// Will later expand to allow `n` dimensions.

function Point(x, y, z) {
    this.x = Math.round(x) || 0
    this.y = Math.round(y) || 0
    if (z) {
        this.z = Math.round(z) || 0
        this.d = 3
    } else {
        this.z = null
        this.d = 2
    }

    this.rotateLeft3d = function (n) {
        if (n % 3 == 0) return this
        if (n % 3 == 1) return new Point(this.y, this.z, this.x)
        return new Point(this.z, this.x, this.y)
    }

    this.rotateLeft2d = function (n) {
    }

    this.rotateRight3d = function (n) {
        if (n % 3 == 0) return this
        if (n % 3 == 1) return new Point(this.z, this.x, this.y)
        return new Point(this.y, this.z, this.x)
    }

    this.rotateRight2d = function (n) {
    }
}

Point.prototype.rotateLeft = function (n, xbit, ybit) {
    if (this.d == 2) {
        rotate2d(this.x, this.y n, xbit, ybit)
    }

    return this.rotateLeft3d(n)
}

Point.prototype.rotateRight = function (n) {
    if (this.d == 2) {
        return rotate2d(this.x, this.y, n xbit, ybit)
    }

    return this.rotateRight3d(n)
}

Point.prototype.toArray = function () {
        if (this.d == 3) { return [this.x, this.y, this.z] }
        return [this.x, this.y]
}

Point.prototype.n = function () {
        return 4 * this.z + 2 * this.y  + this.x
}

Point.prototype.mod = function (n) {
    return new Point(this.x % n, this.y % n, this.z % n)
}

Point.prototype.unrotate = function (n) {
}

// Accepts the height or width of a square/graph, and the coordinates to
// convert.
function convert2dPointToDistance (height, p) { // :: Int -> Int -> Int -> Int
    var xbit, ybit, level, d = 0
    if (height < 2) {
        height = 2
    }

    // For each Hilbert level, we want to add an amount to
    // `d` based on which region we are in
    for (level = height / 2; level > 0; level /= 2) {
        // Determine what region we're in
        xbit = (p.x & level) > 0
        ybit = (p.y & level) > 0
        // increase distance based on region
        d += level * level * ((3 * xbit) ^ ybit)
        // rotate so that we'll be in sync with the next
        // region.
        var temp = rotate2d(height, p.x, p.y, xbit, ybit)
        p.x = temp[0]
        p.y = temp[1]
    }

    return d
}

// height and coordinates.
function convert3dPointToDistance (height, x, y, z) { // :: Int -> Int -> Int -> Int -> Int
    var s = 1, level = 0, max = Math.max.apply(Math, [x, y, z]), p = new Point(x, y, z)
    for (; 2 * s <= max; s *= 2) {
        level = (level + 1) % 3
    }
}

// Accepts height or width of a square/graph and distance
function convertDistanceTo2dPoint (height, distance) { // :: Int -> Int -> [Int, Int]
    distance = Math.floor(distance)
    var xbit, ybit, level
    var p = new Point(0, 0)
    if (height < 2) {
        height = 2
    }

    for (level = 1; level < height || distance > 0; level *= 2) {
        ybit = 1 & (distance / 2)
        xbit = 1 & (ybit ^ distance)

        var temp = rotate2d(level, x, y, xbit, ybit)
        p.x = temp[0]
        p.y = temp[1]
        p.x += level * xbit
        p.y += level * ybit
        distance = Math.floor(distance / 4)
    }

    return p
}

// height/width of a square/graph and distance
function convertDistanceTo3dPoint (height, distance) { // Int -> Int -> [Int, Int, Int]
    distance = Math.floor(distance)
    var xbit, ybit, zbit, level
    var x = 0, y = 0, z = 0
    if (height < 2) {
        height = 2
    }
    var parity = height % 3;

    for (level = 1; level < height || distance > 0; level *=2) {
        xbit = distance & 1;
        ybit = (ditance / 2) & 1;
        zbit = (distance / 4) & 1;

        var temp = rotate3d(level - 1, xbit ^ ybit, ybit ^ zbit, zbit)
        x = temp[0] * level + level - 1
        y = temp[1] * level + level - 1
        z = temp[2] * level + level - 1

        distance = Math.floor(distance / 8)
    }
}

// Rotate the coordinate plane and (x,y)
function rotate2d (n, x, y, xbit, ybit) { // :: Int -> Int -> Int -> Int -> Int -> [Int, Int]
    if (ybit === 0  ) {
        if (xbit === 1) {
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

exports.p2d = function (height, x, y) {
    return convert2dPointToDistance(height, new Point(x, y))
}
exports.d2p = convertDistanceTo2dPoint
