// Use Hilbert curve point generation to map 2D data to 1D space and vice-versa.
// Will later expand to allow `n` dimensions.


// Accepts the height or width of a square/graph, and the coordinates to
// convert.
function convert2dPointToDistance (height, x, y) { // :: Int -> Int -> Int -> Int
    var xbit, ybit, level, d = 0
    if (height < 2) {
        height = 2
    }

    // For each Hilbert level, we want to add an amount to
    // `d` based on which region we are in
    for (level = height / 2; level > 0; level /= 2) {
        // Determine what region we're in
        xbit = (x & level) > 0
        ybit = (y & level) > 0
        // increase distance based on region
        d += level * level * ((3 * xbit) ^ ybit)
        // rotate so that we'll be in sync with the next
        // region.
        var temp = rotate (height, x, y, xbit, ybit)
        x = temp[0]
        y = temp[1]
    }

    return d
}

function convert3dPointToDistance (height, distance) {
}

// Accepts height or width of a square/graph and distance
function convertDistanceTo2dPoint (height, distance) { // :: Int -> Int -> [Int, Int]
    distance = Math.floor(distance)
    var xbit, ybit, level
    var x = 0, y = 0
    if (height < 2) {
        height = 2
    }

    for (level = 1; level < height || distance > 0; level *= 2) {
        ybit = 1 & (distance / 2)
        xbit = 1 & (ybit ^ distance)

        var temp = rotate(level, x, y, xbit, ybit)
        x = temp[0]
        y = temp[1]
        x += level * xbit
        y += level * ybit
        distance = Math.floor(distance / 4)
    }

    return [x, y]
}

function convertDistanceTo3dPoint (height, distance) {
    distance = Math.floor(distance)
    var xbit, ybit, zbit, level
    if (height < 2) {
        height = 2
    }

    for (level = 1; level < height || distance > 0; level *=2) {
        xbit = distance & 1;
        ybit = (ditance / 2) & 1;
        zbit = (distance / 4) & 1;

        // do some rotations
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

exports.p2d = convert2dPointToDistance
exports.d2p = convertDistanceTo2dPoint
