#!/usr/bin/env node

require('proof')(0, prove)

function prove (assert) {
    var hilbert = require('../..')

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

}
