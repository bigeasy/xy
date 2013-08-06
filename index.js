// Use Hilbert curve point generation to map 2D data to 1D space and vice-versa.
// Will later expand to allow `n` dimensions.


// Accepts the height or width of a square, and the coordinates to
// convert.
function convertPointToDistance (height, x, y) {
    var xbit, ybit, level, d = 0

    // For each Hilbert level, we want to add an amount to
    // `d` based on which region we are in
    for (level = height / 2; level > 0; level /= 2) {
        xbit = (x & level) > 0
        ybit = (y & level) > 0
        d += level * level * ((3 * xbit) ^ ybit)
        var temp = rotate (height, x, y, xbit, ybit)
        x = temp[0]
        y = temp[1]
    }

    return d
}

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
