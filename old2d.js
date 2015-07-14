function Point(x, y) { // :: Int -> Int -> Int -> Point
    this.init = function (x, y) {
        this.x = Math.round(x) || 0
        this.y = Math.round(y) || 0
    }
    if (x instanceof Array) {
        this.init(x[0], x[1])
    } else {
        this.init(x, y)
    }
}

Point.prototype.rotate2d = function (n, xbit, ybit) { // : Int -> Int -> Int -> Point
    return new Point(rotate2d(n, this.x, this.y, xbit, ybit))
}

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
    }

    return d
}

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

    return [p.x, p.y]
}

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
