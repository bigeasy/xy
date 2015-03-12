#!/usr/bin/env node

// Created `order` function in `index` to fix precision. Unfortunately, it fails
// at index 64.

require('proof')(34, prove)

function prove (assert) {
    var hilbert = require('../..')

    assert(hilbert.hilbertInverse(2,0), [0,0], "index 0 equals point [0,0]")
    assert(hilbert.hilbertInverse(2,1), [0,1], "index 1 equals point [0,1]")
    assert(hilbert.hilbertInverse(2,2), [1,1], "index 2 equals point [1,1]")
    assert(hilbert.hilbertInverse(2,3), [1,0], "index 3 equals point [1,0]")
    assert(hilbert.hilbertInverse(2,4), [0,2], "index 4 equals point [0,2]")
    assert(hilbert.hilbertInverse(2,5), [0,3], "index 5 equals point [0,3]")
    assert(hilbert.hilbertInverse(2,6), [1,3], "index 6 equals point [1,3]")
    assert(hilbert.hilbertInverse(2,7), [1,2], "index 7 equals point [1,2]")
    assert(hilbert.hilbertInverse(2,8), [2,2], "index 8 equals point [2,2]")

    // works when precision is 2
    assert(hilbert.hilbertInverse(3,0), [0,0,0], "index 0 equals point [0,0,0]")
    assert(hilbert.hilbertInverse(3,1), [0,1,0], "index 1 equals [0,1,0]")
    assert(hilbert.hilbertInverse(3,2), [0,1,1], "index 2 equals [0,1,1]")
    assert(hilbert.hilbertInverse(3,3), [0,0,1], "index 3 equals [0,0,1]")
    assert(hilbert.hilbertInverse(3,4), [1,0,1], "index 4 equals [1,0,1]")
    assert(hilbert.hilbertInverse(3,5), [1,1,1], "index 5 equals [1,1,1]")
    assert(hilbert.hilbertInverse(3,6), [1,1,0], "index 6 equals [1,1,0]")
    assert(hilbert.hilbertInverse(3,7), [1,0,0], "index 7 equals [1,0,0]")

    // works when precision is 3
    assert(hilbert.hilbertInverse(3,8), [0,2,0], "index 8 equals [0,2,0]")
    assert(hilbert.hilbertInverse(3,9), [1,2,0], "index 9 equals [1,2,0]")
    assert(hilbert.hilbertInverse(3,10), [1,3,0], "index 10 equals [1,3,0]")
    assert(hilbert.hilbertInverse(3,11), [0,3,0], "index 11 equals [0,3,0]")
    assert(hilbert.hilbertInverse(3,12), [0,3,1], "index 12 equals [0,3,1]")
    assert(hilbert.hilbertInverse(3,13), [1,3,1], "index 13 equals [1,3,1]")
    assert(hilbert.hilbertInverse(3,14), [1,2,1], "index 14 equals [1,2,1]")
    assert(hilbert.hilbertInverse(3,15), [0,2,1], "index 15 equals [0,2,1]")
    assert(hilbert.hilbertInverse(3,16), [0,2,2], "index 16 equals [0,2,2]")
    assert(hilbert.hilbertInverse(3,17), [1,2,2], "index 17 equals [1,2,2]")
    assert(hilbert.hilbertInverse(3,18), [1,3,2], "index 18 equals [1,3,2]")
    assert(hilbert.hilbertInverse(3,19), [0,3,2], "index 19 equals [0,3,2]")
    assert(hilbert.hilbertInverse(3,20), [0,3,3], "index 20 equals [0,3,3]")
    assert(hilbert.hilbertInverse(3,21), [1,3,3], "index 21 equals [1,3,3]")
    assert(hilbert.hilbertInverse(3,63), [3,0,0], "index 63 equals [3,0,0]")



    // works when precision is 4
    assert(hilbert.hilbertInverse(3,64), [0,4,0], "index 64 equals [0,4,0]")// Fails
    assert(hilbert.hilbertInverse(3,511), [7,0,0], "index 511 equals [7,0,0]")
}
