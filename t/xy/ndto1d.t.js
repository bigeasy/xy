#!/usr/bin/env node

require('proof')(43, prove)

function prove (assert) {
    var hilbert = require('../../index.js')
    // 2 dimensions
    var options = { precision: 2 }

    assert(hilbert.hilbert([0,0], options), 0, "(0,0) index equals 0")
    assert(hilbert.hilbert([0,1], options), 1, "(0,1) index equals 1")
    assert(hilbert.hilbert([1,1], options), 2, "(1,1) index equals 2")
    assert(hilbert.hilbert([1,0], options), 3, "(1,0) index equals 3")

    options = { precision: 3 }
    assert(hilbert.hilbert([0,0], options), 0, "(0,0) index equals 0")
    assert(hilbert.hilbert([1,0], options), 1, "(1,0) index equals 1")
    assert(hilbert.hilbert([1,1], options), 2, "(1,1) index equals 2")
    assert(hilbert.hilbert([0,1], options), 3, "(0,1) index equals 3")


    assert(hilbert.hilbert([7,0]), 63, "(7,0) index equals 63")
    assert(hilbert.hilbert([0,8]), 64, "(0,8) index equals 64")
    assert(hilbert.hilbert([15,0]), 255, "(15,0) index equals 255")
    assert(hilbert.hilbert([0,16]), 256, "(0,16) index equals 256")
    assert(hilbert.hilbert([31,0]), 1023, "(31,0) index equals 1023")
    assert(hilbert.hilbert([0,32]), 1024, "(0,32) index equals 1024")
    assert(hilbert.hilbert([63,0]), 4095, "(63,0) index equals 4095")
    assert(hilbert.hilbert([0,64]), 4096, "(0,64) index equals 4096")
    assert(hilbert.hilbert([16383,0]), 268435455, "(16383,0) index equals 268435455")

    // highest 2d dimension
    assert(hilbert.hilbert([32767,0]), 1073741823, "(32767,0) index equals 1073741823")
    assert(hilbert.hilbert([0,32768]), 1073741824, "(0,32768) index equals 1073741824")

    // 3 dimensions
    assert(hilbert.hilbert([3,0,0]), 63, "(3,0,0) index equals 63")
    assert(hilbert.hilbert([0,4,0]), 64, "(0,4,0) index equals 64")
    assert(hilbert.hilbert([7,0,0]), 511, "(7,0,0) index equals 511")
    assert(hilbert.hilbert([0,8,0]), 512, "(0,8,0) index equals 512")

    // highest 3d dimension
    assert(hilbert.hilbert([1023,0,0]),1073741823, "(1023,0,0) index equals 1073741823")
    assert(hilbert.hilbert([0,1024,0]),1073741824, "(0,1024,0) index equals 1073741824")

    // 4 dimensions
    assert(hilbert.hilbert([0,0,0,0]), 0, "(0,0,0,0) index equals 0")
    assert(hilbert.hilbert([0,1,0,0]), 1, "(0,1,0,0) index equals 1")
    assert(hilbert.hilbert([0,1,1,0]), 2, "(0,1,1,0) index equals 2")
    assert(hilbert.hilbert([0,0,1,0]), 3, "(0,0,1,0) index equals 3")
    assert(hilbert.hilbert([0,0,1,1]), 4, "(0,0,1,1) index equals 4")
    assert(hilbert.hilbert([0,1,1,1]), 5, "(0,1,1,1) index equals 5")
    assert(hilbert.hilbert([0,1,0,1]), 6, "(0,0,0,1) index equals 6")
    assert(hilbert.hilbert([0,0,0,1]), 7, "(1,0,0,0) index equals 7")
    assert(hilbert.hilbert([1,0,0,1]), 8, "(1,0,0,1) index equals 8")
    assert(hilbert.hilbert([1,1,0,1]), 9, "(1,1,0,1) index equals 9")
    assert(hilbert.hilbert([1,1,1,1]), 10, "(1,1,1,1) index equals 10")
    assert(hilbert.hilbert([1,0,1,1]), 11, "(1,0,1,1) index equals 11")
    assert(hilbert.hilbert([1,0,1,0]), 12, "(1,0,1,0) index equals 12")
    assert(hilbert.hilbert([1,1,1,0]), 13, "(1,1,1,0) index equals 13")
    assert(hilbert.hilbert([1,1,0,0]), 14, "(1,1,0,0) index equals 14")
    assert(hilbert.hilbert([1,0,0,0]), 15, "(1,0,0,0) index equals 15")
    assert(hilbert.hilbert([63,0,0,0]),16777215, "(63,0,0,0) index equals 16777215")
    // highest 4d dimension
    assert(hilbert.hilbert([127,0,0,0]),268435455, "(127,0,0,0) index equals 268435455")
}
