// Use Hilbert curve point generation to map 2D data to 1D space and vice-versa.
// Will later expand to allow `n` dimensions.


// Accepts the height or width of a square, and the coordinates to
// convert.
function convertPointToDistance (height, x, y) {
    var xbit, ybit, level, d = 0

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

function convertDistanceToPoint (height, distance) {
    var xbit, ybit, level, distance
    var x = 0, y = 0

    for (level = 1; level < height; level *= 2) {
        xbit = 1 & (distance / 2)
        ybit = 1 & (distance ^ xbit)

        var temp = rotate(height, x, y, xbit, ybit)
        x = temp[0]
        y = temp[1]
        x += level * xbit
        y += level * xbit
        distance /= 4
    }

    return [x, y]
}

// Rotate the coordinate plane and (x,y)
function rotate (n, x, y, xbit, ybit) {
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

exports.convertPointToDistance = convertPointToDistance
exports.convertDistanceToPoint = convertDistanceToPoint
