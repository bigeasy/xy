#!/usr/bin/env node

require('proof')(1, function (assert) {
    var hilbert = require('../..')
    /*
    // vv actul tests
    assert(hilbert.d2xyz(7, 2), [1, 0, 0])
    assert(hilbert.d2xyz(63, 4), [3, 0, 0])
    assert(hilbert.d2xyz(64, 8), [0, 0, 4])
    assert(hilbert.d2xyz(65, 8), [0, 0, 5])
    assert(hilbert.d2xyz(127, 8), [0, 3, 4])
    assert(hilbert.d2xyz(192, 8), [0, 7, 3])
    assert(hilbert.d2xyz(320, 8), [7, 7, 4])
    assert(hilbert.d2xyz(511, 8), [7, 0, 0])
    */


    // vvv will be erased. used to tinker with
    // d2xyz function.
    console.log(hilbert.d2xyz(0, 2))
    console.log(hilbert.d2xyz(1, 2)) // 0,  0, 1
    console.log(hilbert.d2xyz(2, 2)) // 1,  0, 1
    console.log(hilbert.d2xyz(3, 2)) // 0, -1, 0
    console.log(hilbert.d2xyz(4, 2)) // 0, -1, 1
    console.log(hilbert.d2xyz(5, 2)) // 1, -1, -1
    console.log(hilbert.d2xyz(6, 2)) // 0, -1, -1
    console.log(hilbert.d2xyz(7, 2)) // -1, 0, 0
    console.log(hilbert.d2xyz(8, 2))
    console.log(hilbert.d2xyz(9, 2))
    console.log(hilbert.d2xyz(10, 2))
    console.log(hilbert.d2xyz(11, 2))
    console.log(hilbert.d2xyz(12, 2))
    console.log(hilbert.d2xyz(13, 2))
    console.log(hilbert.d2xyz(14, 2))
    console.log(hilbert.d2xyz(15, 2))
    console.log(hilbert.d2xyz(16, 2))
    console.log(hilbert.d2xyz(17, 2))
    console.log(hilbert.d2xyz(18, 2))
    console.log(hilbert.d2xyz(19, 2))
    console.log(hilbert.d2xyz(20, 2))
    console.log(hilbert.d2xyz(21, 2))
    console.log(hilbert.d2xyz(22, 2))
    console.log(hilbert.d2xyz(23, 2))
    console.log(hilbert.d2xyz(25, 2))
    console.log(hilbert.d2xyz(26, 2))
    console.log(hilbert.d2xyz(27, 2))
    console.log(hilbert.d2xyz(28, 2))
    console.log(hilbert.d2xyz(29, 2))
    console.log(hilbert.d2xyz(30, 2))
    console.log(hilbert.d2xyz(31, 2))
    console.log(hilbert.d2xyz(32, 2))
})
