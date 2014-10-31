#!/usr/bin/env node

require('proof')(2, function(assert) {
    var xy = require('../../index.js')
    assert(xy.p2d(2, 0, 0), 0)
    assert(xy.p2d(2, 0, 1), 3)
})
