#!/usr/bin/env node

require('proof')(5, prove)

function prove (assert) {
    var xy = require('../../index')
    assert(xy.grayCode(2), 3)
    assert(xy.grayCode(100), 86)
    assert(xy.grayCode(1000), 540)
    assert(xy.grayCode(253), 131)
    assert(xy.grayCode(45), 59)
}
