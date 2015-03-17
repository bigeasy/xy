#!/usr/bin/env node

require('proof')(0, prove)

function prove (assert) {
    var hilbert = require('../..')
    /*
    assert(hilbert.hilbert(2,3,0), 15, "(3,0) index equals 15")
    assert(hilbert.hilbert(2,0,4), 16, "(0,4) index equals 16")
    assert(hilbert.hilbert(2,7,0), 63, "(7,0) index equals 63")
    assert(hilbert.hilbert(2,0,8), 64, "(0,8) index equals 64")
    assert(hilbert.hilbert(2,15,0), 255, "(15,0) index equals 255")
    assert(hilbert.hilbert(2,0,16), 256, "(0,16) index equals 256")
    assert(hilbert.hilbert(2,31,0), 1023, "(31,0) index equals 1023")
    assert(hilbert.hilbert(2,0,32), 1024, "(0,32) index equals 1024")
    assert(hilbert.hilbert(2,63,0), 4095, "(63,0) index equals 4095")
    assert(hilbert.hilbert(2,0,64), 4096, "(0,64) index equals 4096")
    assert(hilbert.hilbert(2,16383,0), 268435455, "(16383,0) index equals 2684355455")
    assert(hilbert.hilbert(2,32767,0), 1073741823, "(32767,0) index equals 1073741823")
    assert(hilbert.hilbert(2,0,32768), 1073741824, "(0,32768) index equals 1073741824")
// Point order created by `index` function.
    console.log(hilbert.hilbert(3,0,0,0))// 0
    console.log(hilbert.hilbert(3,0,1,0))// 1
    console.log(hilbert.hilbert(3,0,1,1))// 2
    console.log(hilbert.hilbert(3,0,0,1))// 3
    console.log(hilbert.hilbert(3,1,0,1))// 4
    console.log(hilbert.hilbert(3,1,1,1))// 5
    console.log(hilbert.hilbert(3,1,1,0))// 6
    console.log(hilbert.hilbert(3,1,0,0))// 7
    console.log(hilbert.hilbert(3,0,2,0))// 8 <- this is strange.
    console.log(hilbert.hilbert(3,1,2,0))// 9
    console.log(hilbert.hilbert(3,1,3,0))// 10
    console.log(hilbert.hilbert(3,0,3,0))// 11
    console.log(hilbert.hilbert(3,0,3,1))// 12
    console.log(hilbert.hilbert(3,1,3,1))// 13
    console.log(hilbert.hilbert(3,1,2,1))// 14
    console.log(hilbert.hilbert(3,0,2,1))// 15
    console.log(hilbert.hilbert(3,0,2,2))// 16
    console.log(hilbert.hilbert(3,1,2,2))// 17
    console.log(hilbert.hilbert(3,1,3,2))// 18
    console.log(hilbert.hilbert(3,0,3,2))// 19
    console.log(hilbert.hilbert(3,0,3,3))// 20
    console.log(hilbert.hilbert(3,1,3,3))// 21
    console.log(hilbert.hilbert(3,1,2,3))// 22
    console.log(hilbert.hilbert(3,0,2,3))// 23
    console.log(hilbert.hilbert(3,0,1,3))// 24
    console.log(hilbert.hilbert(3,0,0,3))// 25
    console.log(hilbert.hilbert(3,0,0,2))// 26
    console.log(hilbert.hilbert(3,0,1,2))// 27
    console.log(hilbert.hilbert(3,1,1,2))// 28
    console.log(hilbert.hilbert(3,1,0,2))// 29
    console.log(hilbert.hilbert(3,1,0,3))// 30
    console.log(hilbert.hilbert(3,1,1,3))// 31
    console.log(hilbert.hilbert(3,2,1,3))// 32
    console.log(hilbert.hilbert(3,2,0,3))// 33
    console.log(hilbert.hilbert(3,2,0,2))// 34
    console.log(hilbert.hilbert(3,2,1,2))// 35
    console.log(hilbert.hilbert(3,3,1,2))// 36
    console.log(hilbert.hilbert(3,3,0,2))// 37
    console.log(hilbert.hilbert(3,3,0,3))// 38
    console.log(hilbert.hilbert(3,3,1,3))// 39
    console.log(hilbert.hilbert(3,3,2,3))// 40
    console.log(hilbert.hilbert(3,2,2,3))// 41
    console.log(hilbert.hilbert(3,2,3,3))// 42
    console.log(hilbert.hilbert(3,3,3,3))// 43
    console.log(hilbert.hilbert(3,3,3,2))// 44
    console.log(hilbert.hilbert(3,2,3,2))// 45
    console.log(hilbert.hilbert(3,2,2,2))// 46
    console.log(hilbert.hilbert(3,3,2,2))// 47
    console.log(hilbert.hilbert(3,3,2,1))// 48
    console.log(hilbert.hilbert(3,2,2,1))// 49
    console.log(hilbert.hilbert(3,2,3,1))// 50
    console.log(hilbert.hilbert(3,3,3,1))// 51
    console.log(hilbert.hilbert(3,3,3,0))// 52
    console.log(hilbert.hilbert(3,2,3,0))// 53
    console.log(hilbert.hilbert(3,2,2,0))// 54
    console.log(hilbert.hilbert(3,3,2,0))// 55
    console.log(hilbert.hilbert(3,3,1,0))// 56
    console.log(hilbert.hilbert(3,3,1,1))// 57
    console.log(hilbert.hilbert(3,2,1,1))// 58
    console.log(hilbert.hilbert(3,2,1,0))// 59
    console.log(hilbert.hilbert(3,2,0,0))// 60
    console.log(hilbert.hilbert(3,2,0,1))// 61
    console.log(hilbert.hilbert(3,3,0,1))// 62
    console.log(hilbert.hilbert(3,3,0,0))// 63
    console.log(hilbert.hilbert(3,0,4,0))// 64
    //next block
    console.log(hilbert.hilbert(3,0,4,0))// 0
    console.log(hilbert.hilbert(3,0,1,0))// 1
    console.log(hilbert.hilbert(3,0,1,1))// 2
    console.log(hilbert.hilbert(3,0,0,1))// 3
    console.log(hilbert.hilbert(3,1,0,1))// 4
    console.log(hilbert.hilbert(3,1,1,1))// 5
    console.log(hilbert.hilbert(3,1,1,0))// 6
    console.log(hilbert.hilbert(3,1,0,0))// 7
    console.log(hilbert.hilbert(3,0,2,0))// 8 <- this is strange.
    console.log(hilbert.hilbert(3,1,2,0))// 9
    console.log(hilbert.hilbert(3,1,3,0))// 10
    console.log(hilbert.hilbert(3,0,3,0))// 11
    console.log(hilbert.hilbert(3,0,3,1))// 12
    console.log(hilbert.hilbert(3,1,3,1))// 13
    console.log(hilbert.hilbert(3,1,2,1))// 14
    console.log(hilbert.hilbert(3,0,2,1))// 15
    console.log(hilbert.hilbert(3,0,2,2))// 16
    console.log(hilbert.hilbert(3,1,2,2))// 17
    console.log(hilbert.hilbert(3,1,3,2))// 18
    console.log(hilbert.hilbert(3,0,3,2))// 19
    console.log(hilbert.hilbert(3,0,3,3))// 20
    console.log(hilbert.hilbert(3,1,3,3))// 21
    console.log(hilbert.hilbert(3,1,2,3))// 22
    console.log(hilbert.hilbert(3,0,2,3))// 23
    console.log(hilbert.hilbert(3,0,1,3))// 24
    console.log(hilbert.hilbert(3,0,0,3))// 25
    console.log(hilbert.hilbert(3,0,0,2))// 26
    console.log(hilbert.hilbert(3,0,1,2))// 27
    console.log(hilbert.hilbert(3,1,1,2))// 28
    console.log(hilbert.hilbert(3,1,0,2))// 29
    console.log(hilbert.hilbert(3,1,0,3))// 30
    console.log(hilbert.hilbert(3,1,1,3))// 31
    console.log(hilbert.hilbert(3,2,1,3))// 32
    console.log(hilbert.hilbert(3,2,0,3))// 33
    console.log(hilbert.hilbert(3,2,0,2))// 34
    console.log(hilbert.hilbert(3,2,1,2))// 35
    console.log(hilbert.hilbert(3,3,1,2))// 36
    console.log(hilbert.hilbert(3,3,0,2))// 37
    console.log(hilbert.hilbert(3,3,0,3))// 38
    console.log(hilbert.hilbert(3,3,1,3))// 39
    console.log(hilbert.hilbert(3,3,2,3))// 40
    console.log(hilbert.hilbert(3,2,2,3))// 41
    console.log(hilbert.hilbert(3,2,3,3))// 42
    console.log(hilbert.hilbert(3,3,3,3))// 43
    console.log(hilbert.hilbert(3,3,3,2))// 44
    console.log(hilbert.hilbert(3,2,3,2))// 45
    console.log(hilbert.hilbert(3,2,2,2))// 46
    console.log(hilbert.hilbert(3,3,2,2))// 47
    console.log(hilbert.hilbert(3,3,2,1))// 48
    console.log(hilbert.hilbert(3,2,2,1))// 49
    console.log(hilbert.hilbert(3,2,3,1))// 50
    console.log(hilbert.hilbert(3,3,3,1))// 51
    console.log(hilbert.hilbert(3,3,3,0))// 52
    console.log(hilbert.hilbert(3,2,3,0))// 53
    console.log(hilbert.hilbert(3,2,2,0))// 54
    console.log(hilbert.hilbert(3,3,2,0))// 55
    console.log(hilbert.hilbert(3,3,1,0))// 56
    console.log(hilbert.hilbert(3,3,1,1))// 57
    console.log(hilbert.hilbert(3,2,1,1))// 58
    console.log(hilbert.hilbert(3,2,1,0))// 59
    console.log(hilbert.hilbert(3,2,0,0))// 60
    console.log(hilbert.hilbert(3,2,0,1))// 61
    console.log(hilbert.hilbert(3,3,0,1))// 62
    console.log(hilbert.hilbert(3,3,0,0))// 63
    console.log(hilbert.hilbert(3,0,4,0))// 64

/*
// index points 0 - 63 in expected order with actual results
    console.log(hilbert.hilbert(3,0,0,0))// 0
    console.log(hilbert.hilbert(3,0,1,0))// 1
    console.log(hilbert.hilbert(3,0,1,1))// 2
    console.log(hilbert.hilbert(3,0,0,1))// 3
    console.log(hilbert.hilbert(3,1,0,1))// 4
    console.log(hilbert.hilbert(3,1,1,1))// 5
    console.log(hilbert.hilbert(3,1,1,0))// 6
    console.log(hilbert.hilbert(3,1,0,0))// 7
    console.log(hilbert.hilbert(3,0,0,2))// 26
    console.log(hilbert.hilbert(3,1,0,2))// 29
    console.log(hilbert.hilbert(3,1,0,3))// 30
    console.log(hilbert.hilbert(3,0,0,3))// 25
    console.log(hilbert.hilbert(3,0,1,3))// 24
    console.log(hilbert.hilbert(3,1,1,3))// 31
    console.log(hilbert.hilbert(3,1,1,2))// 28
    console.log(hilbert.hilbert(3,0,1,2))// 27
    console.log(hilbert.hilbert(3,0,2,2))// 16
    console.log(hilbert.hilbert(3,1,2,2))// 17
    console.log(hilbert.hilbert(3,1,2,3))// 22
    console.log(hilbert.hilbert(3,0,2,3))// 23
    console.log(hilbert.hilbert(3,0,3,3))// 20
    console.log(hilbert.hilbert(3,1,3,3))// 21
    console.log(hilbert.hilbert(3,1,3,2))// 18
    console.log(hilbert.hilbert(3,0,3,2))// 19
    console.log(hilbert.hilbert(3,0,3,1))// 12
    console.log(hilbert.hilbert(3,0,3,0))// 11
    console.log(hilbert.hilbert(3,0,2,0))// 8
    console.log(hilbert.hilbert(3,0,2,1))// 15
    console.log(hilbert.hilbert(3,1,2,1))// 14
    console.log(hilbert.hilbert(3,1,2,0))// 9
    console.log(hilbert.hilbert(3,1,3,0))// 10
    console.log(hilbert.hilbert(3,1,3,1))// 13
    console.log(hilbert.hilbert(3,2,3,1))// 50
    console.log(hilbert.hilbert(3,2,3,0))// 53
    console.log(hilbert.hilbert(3,2,2,0))// 54
    console.log(hilbert.hilbert(3,2,2,1))// 49
    console.log(hilbert.hilbert(3,3,2,1))// 48
    console.log(hilbert.hilbert(3,3,2,0))// 55
    console.log(hilbert.hilbert(3,3,3,0))// 52
    console.log(hilbert.hilbert(3,3,3,1))// 51
    console.log(hilbert.hilbert(3,3,3,2))// 44
    console.log(hilbert.hilbert(3,2,3,2))// 45
    console.log(hilbert.hilbert(3,2,3,3))// 42
    console.log(hilbert.hilbert(3,3,3,3))// 43
    console.log(hilbert.hilbert(3,3,2,3))// 40
    console.log(hilbert.hilbert(3,2,2,3))// 41
    console.log(hilbert.hilbert(3,2,2,2))// 46
    console.log(hilbert.hilbert(3,3,2,2))// 47
    console.log(hilbert.hilbert(3,3,1,2))// 36
    console.log(hilbert.hilbert(3,2,1,2))// 35
    console.log(hilbert.hilbert(3,2,1,3))// 32
    console.log(hilbert.hilbert(3,3,1,3))// 39
    console.log(hilbert.hilbert(3,3,0,3))// 38
    console.log(hilbert.hilbert(3,2,0,3))// 33
    console.log(hilbert.hilbert(3,2,0,2))// 34
    console.log(hilbert.hilbert(3,3,0,2))// 37
    console.log(hilbert.hilbert(3,3,0,1))// 62
    console.log(hilbert.hilbert(3,3,1,1))// 57
    console.log(hilbert.hilbert(3,2,1,1))// 58
    console.log(hilbert.hilbert(3,2,0,1))// 61
    console.log(hilbert.hilbert(3,2,0,0))// 60
    console.log(hilbert.hilbert(3,2,1,0))// 59
    console.log(hilbert.hilbert(3,3,1,0))// 56
    console.log(hilbert.hilbert(3,3,0,0))// 63

*/
    assert(hilbert.hilbertInverse(3,0), [0,0,0], "index 0 equals point [0,0,0]")
    assert(hilbert.hilbertInverse(3,1), [0,1,0], "index 1 equals [0,1,0]")
    assert(hilbert.hilbertInverse(3,2), [0,1,1], "index 2 equals [0,1,1]")
    assert(hilbert.hilbertInverse(3,3), [0,0,1], "index 3 equals [0,0,1]")
    assert(hilbert.hilbertInverse(3,4), [1,0,1], "index 4 equals [1,0,1]")
    assert(hilbert.hilbertInverse(3,5), [1,1,1], "index 5 equals [1,1,1]")
    assert(hilbert.hilbertInverse(3,6), [1,1,0], "index 6 equals [1,1,0]")
    assert(hilbert.hilbertInverse(3,7), [1,0,0], "index 7 equals [1,0,0]")
    assert(hilbert.hilbertInverse(3,8), [0,2,0], "index 8 equals [0,2,0]")

/*
    console.log(hilbert.hilbertInverse(3,0))
    console.log(hilbert.hilbertInverse(3,1))
    console.log(hilbert.hilbertInverse(3,2))
    console.log(hilbert.hilbertInverse(3,3))
    console.log(hilbert.hilbertInverse(3,4))
    console.log(hilbert.hilbertInverse(3,5))
    console.log(hilbert.hilbertInverse(3,6))
    console.log(hilbert.hilbertInverse(3,7))
    console.log(hilbert.hilbertInverse(3,8))
    console.log(hilbert.hilbertInverse(3,9))
    console.log(hilbert.hilbertInverse(3,10))
    console.log(hilbert.hilbertInverse(3,11))
    console.log(hilbert.hilbertInverse(3,12))
    console.log(hilbert.hilbertInverse(3,13))
    console.log(hilbert.hilbertInverse(3,14))
    console.log(hilbert.hilbertInverse(3,15))
    console.log(hilbert.hilbertInverse(3,16))
    console.log(hilbert.hilbertInverse(3,17))
    console.log(hilbert.hilbertInverse(3,18))
    console.log(hilbert.hilbertInverse(3,19))
    console.log(hilbert.hilbertInverse(3,20))
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
