#!/usr/bin/env node

require('proof')(10, prove)

function prove (assert) {
    var hilbert = require('../..')

    assert(hilbert.hilbert(2,0,3), 15, "(0,3) index equals 15")
    assert(hilbert.hilbert(2,4,0), 16, "(4,0) index equals 16")
    assert(hilbert.hilbert(2,0,7), 63, "(0,7) index equals 63")
    assert(hilbert.hilbert(2,8,0), 64, "(8,0) index equals 64")
    assert(hilbert.hilbert(2,0,15), 255, "(0,15) index equals 255")
    assert(hilbert.hilbert(2,16,0), 256, "(16,0) index equals 256")
    assert(hilbert.hilbert(2,0,31), 1023, "(0,31) index equals 1023")
    assert(hilbert.hilbert(2,32,0), 1024, "(32,0) index equals 1024")
    assert(hilbert.hilbert(2,0,63), 4095, "(0,63) index equals 4095")
    assert(hilbert.hilbert(2,64,0), 4096, "(64,0) index equals 4096")

    console.log(hilbert.hilbert(3,1,0,0))// 1
    console.log(hilbert.hilbert(3,1,1,0))// 2
    console.log(hilbert.hilbert(3,0,1,0))// 3
    console.log(hilbert.hilbert(3,0,1,1))// 4
    console.log(hilbert.hilbert(3,1,1,1))// 5
    console.log(hilbert.hilbert(3,1,0,1))// 6
    console.log(hilbert.hilbert(3,0,0,1))// 7
    console.log(hilbert.hilbert(3,2,0,0))// 8


    /*
    console.log("Point (0,0) " + hilbert.hilbert(2, 0, 0) + " above ^^^ \n")
    console.log("Point (1,0) " + hilbert.hilbert(2, 1, 0) + " above ^^^ \n")
    console.log("Point (1,1) " + hilbert.hilbert(2, 1, 1) + " above ^^^ \n")
    console.log("Point (0,1) " + hilbert.hilbert(2, 0, 1) + " above ^^^ \n")
    console.log("Point (2,0) " + hilbert.hilbert(2, 2, 0) + " above ^^^ \n")
    console.log("Point (3,0) " + hilbert.hilbert(2, 3, 0) + " above ^^^ \n")
    console.log("Point (3,1) " + hilbert.hilbert(2, 3, 1) + " above ^^^ \n")
    console.log("Point (2,1) " + hilbert.hilbert(2, 2, 1) + " above ^^^ \n")
    console.log("Point (2,2) " + hilbert.hilbert(2, 2, 2) + " above ^^^ \n")
    console.log("Point (3,2) " + hilbert.hilbert(2, 3, 2) + " above ^^^ \n")
    console.log("Point (3,3) " + hilbert.hilbert(2, 3, 3) + " above ^^^ \n")
    console.log("Point (2,3) " + hilbert.hilbert(2, 2, 3) + " above ^^^ \n")
    console.log("Point (1,3) " + hilbert.hilbert(2, 1, 3) + " above ^^^ \n")
    console.log("Point (1,2) " + hilbert.hilbert(2, 1, 2) + " above ^^^ \n")
    console.log("Point (0,2) " + hilbert.hilbert(2, 0, 2) + " above ^^^ \n")
    console.log("Point (0,3) " + hilbert.hilbert(2, 0, 3) + " above ^^^ \n")
    console.log("Point (4,0) " + hilbert.hilbert(2, 4, 0) + " above ^^^ \n")
    console.log("Point (4,1) " + hilbert.hilbert(2, 4, 1) + " above ^^^ \n")
    console.log("Point (5,1) " + hilbert.hilbert(2, 5, 1) + " above ^^^ \n")
    console.log("Point (5,0) " + hilbert.hilbert(2, 5, 0) + " above ^^^ \n")
    console.log("Point (6,0) " + hilbert.hilbert(2, 6, 0) + " above ^^^ \n")
    console.log("Point (7,0) " + hilbert.hilbert(2, 7, 0) + " above ^^^ \n")
    console.log("Point (7,1) " + hilbert.hilbert(2, 7, 1) + " above ^^^ \n")
    console.log("Point (6,1) " + hilbert.hilbert(2, 6, 1) + " above ^^^ \n")
    console.log("Point (6,2) " + hilbert.hilbert(2, 6, 2) + " above ^^^ \n")
    console.log("Point (7,2) " + hilbert.hilbert(2, 7, 2) + " above ^^^ \n")
    console.log("Point (7,3) " + hilbert.hilbert(2, 7, 3) + " above ^^^ \n")
    console.log("Point (6,3) " + hilbert.hilbert(2, 6, 3) + " above ^^^ \n")
    console.log("Point (5,3) " + hilbert.hilbert(2, 5, 3) + " above ^^^ \n")
    console.log("Point (5,2) " + hilbert.hilbert(2, 5, 2) + " above ^^^ \n")
    console.log("Point (4,2) " + hilbert.hilbert(2, 4, 2) + " above ^^^ \n")
    console.log("Point (4,3) " + hilbert.hilbert(2, 4, 3) + " above ^^^ \n")
    console.log("Point (4,4) " + hilbert.hilbert(2, 4, 4) + " above ^^^ \n")
    console.log("Point (4,5) " + hilbert.hilbert(2, 4, 5) + " above ^^^ \n")
    console.log("Point (5,5) " + hilbert.hilbert(2, 5, 5) + " above ^^^ \n")
    console.log("Point (5,4) " + hilbert.hilbert(2, 5, 4) + " above ^^^ \n")
    console.log("Point (6,4) " + hilbert.hilbert(2, 6, 4) + " above ^^^ \n")
    console.log("Point (7,4) " + hilbert.hilbert(2, 7, 4) + " above ^^^ \n")
    console.log("Point (7,5) " + hilbert.hilbert(2, 7, 5) + " above ^^^ \n")
    console.log("Point (6,5) " + hilbert.hilbert(2, 6, 5) + " above ^^^ \n")
    console.log("Point (6,6) " + hilbert.hilbert(2, 6, 6) + " above ^^^ \n")
    console.log("Point (7,6) " + hilbert.hilbert(2, 7, 6) + " above ^^^ \n")
    console.log("Point (7,7) " + hilbert.hilbert(2, 7, 7) + " above ^^^ \n")
    console.log("Point (6,7) " + hilbert.hilbert(2, 6, 7) + " above ^^^ \n")
    console.log("Point (5,7) " + hilbert.hilbert(2, 5, 7) + " above ^^^ \n")
    console.log("Point (5,6) " + hilbert.hilbert(2, 5, 6) + " above ^^^ \n")
    console.log("Point (4,6) " + hilbert.hilbert(2, 4, 6) + " above ^^^ \n")
    console.log("Point (4,7) " + hilbert.hilbert(2, 4, 7) + " above ^^^ \n")
    console.log("Point (3,7) " + hilbert.hilbert(2, 3, 7) + " above ^^^ \n")
    console.log("Point (2,7) " + hilbert.hilbert(2, 2, 7) + " above ^^^ \n")
    console.log("Point (2,6) " + hilbert.hilbert(2, 2, 6) + " above ^^^ \n")
    console.log("Point (3,6) " + hilbert.hilbert(2, 3, 6) + " above ^^^ \n")
    console.log("Point (3,5) " + hilbert.hilbert(2, 3, 5) + " above ^^^ \n")
    console.log("Point (3,4) " + hilbert.hilbert(2, 3, 4) + " above ^^^ \n")
    console.log("Point (2,4) " + hilbert.hilbert(2, 2, 4) + " above ^^^ \n")
    console.log("Point (2,5) " + hilbert.hilbert(2, 2, 5) + " above ^^^ \n")
    console.log("Point (1,5) " + hilbert.hilbert(2, 1, 5) + " above ^^^ \n")
    console.log("Point (1,4) " + hilbert.hilbert(2, 1, 4) + " above ^^^ \n")
    console.log("Point (0,4) " + hilbert.hilbert(2, 0, 4) + " above ^^^ \n")
    console.log("Point (0,5) " + hilbert.hilbert(2, 0, 5) + " above ^^^ \n")
    console.log("Point (0,6) " + hilbert.hilbert(2, 0, 6) + " above ^^^ \n")
    console.log("Point (1,6) " + hilbert.hilbert(2, 1, 6) + " above ^^^ \n")
    console.log("Point (1,7) " + hilbert.hilbert(2, 1, 7) + " above ^^^ \n")
    console.log("Point (0,7) " + hilbert.hilbert(2, 0, 7) + " above ^^^ \n")
*/
}
