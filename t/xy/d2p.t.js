#!/usr/bin/env node

require('proof')(2, function(assert) {
    var xy = require('../../index.js')
    assert(xy.d2p(2, 0), [0, 0])
    assert(xy.d2p(2, 3), [0, 1])
})
