#!/usr/bin/env node

require('proof')(5, prove)

function prove (assert) {
    var xy = require('../../index')
    assert(xy.grayInverse(3), 2)
    assert(xy.grayCode(86), 100)
    assert(xy.grayCode(540), 1000)
    assert(xy.grayCode(131), 253)
    assert(xy.grayCode(59), 45)
}
